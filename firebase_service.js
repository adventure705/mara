
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export class DataStore {
    constructor() {
        this.db = null;
        this.isInitialized = false;
    }

    async init() {
        try {
            const response = await fetch('./firebase-config.json');
            if (!response.ok) throw new Error("Config not found");
            const firebaseConfig = await response.json();

            const app = initializeApp(firebaseConfig);
            this.db = getFirestore(app);
            this.isInitialized = true;
            console.log("Firebase/Firestore Initialized");
            return true;
        } catch (error) {
            console.error("Firebase Init Error:", error);
            return false;
        }
    }

    async load(key) {
        if (!this.isInitialized) {
            console.warn("DB not initialized, falling back to localStorage.");
            const local = localStorage.getItem(key);
            return local ? JSON.parse(local) : null;
        }

        try {
            const docRef = doc(this.db, "mara_global", key);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const val = docSnap.data().data;
                // Sync to localStorage for offline capability or faster next load if needed
                localStorage.setItem(key, JSON.stringify(val));
                return val;
            } else {
                // If not in Firebase, check localStorage (migration path)
                const local = localStorage.getItem(key);
                if (local) {
                    console.log(`Migrating ${key} from LocalStorage to Firebase...`);
                    const parsed = JSON.parse(local);
                    await this.save(key, parsed);
                    return parsed;
                }
                return null;
            }
        } catch (e) {
            console.error(`Load Error for ${key}:`, e);
            const local = localStorage.getItem(key);
            return local ? JSON.parse(local) : null;
        }
    }

    async save(key, data) {
        // Always save to localStorage as backup/cache
        localStorage.setItem(key, JSON.stringify(data));

        if (!this.isInitialized) return;

        try {
            await setDoc(doc(this.db, "mara_global", key), {
                data: data,
                updatedAt: new Date().toISOString()
            });
            console.log(`Saved ${key} to Firebase`);
        } catch (e) {
            console.error(`Save Error for ${key}:`, e);
        }
    }
}
