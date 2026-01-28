# Windows PowerShell Compatibility Rules

You are operating on a **Windows** system using **PowerShell**. To avoid "CommandNotFoundException" and other compatibility issues, you must adhere to the following rules:

## ⛔ Terminal Command Restrictions
Never use standard Unix/Linux commands. Instead, use their native PowerShell equivalents:

| Unix Command | PowerShell Equivalent | Purpose |
| :--- | :--- | :--- |
| `tail -n 100` | `Get-Content <file> -Tail 100` | View last 100 lines |
| `head -n 20` | `Get-Content <file> -TotalCount 20` | View first 20 lines |
| `grep "pattern"` | `Select-String -Pattern "pattern"` | Search for text |
| `ls -la` | `ls -Force` / `Get-ChildItem -Force` | List all files |
| `cat` | `Get-Content` | Read file content |
| `touch <file>` | `New-Item -ItemType File <file>` | Create empty file |
| `rm -rf <dir>` | `Remove-Item -Recurse -Force <dir>` | Force delete directory |
| `mkdir -p <dir>`| `New-Item -ItemType Directory -Force <dir>` | Create directory tree |
| `which <cmd>` | `Get-Command <cmd>` | Locate command path |
| `mv` | `Move-Item` | Move/Rename |
| `cp -r` | `Copy-Item -Recurse` | Copy directory |

## 💡 Best Practices
1. **Piping**: PowerShell pipes pass *objects*, not just text strings. Use `Select-Object`, `Where-Object`, and `ForEach-Object` when processing complex output.
2. **Encodings**: If you encounter issues with Korean characters or special symbols, remember that PowerShell default encoding might vary (e.g., UTF-16, windows-949). Use `-Encoding UTF8` where necessary.
3. **Paths**: Use absolute paths for all file operations to avoid "Path not found" errors.
4. **Command Check**: If unsure if a command exists, use `Get-Command <command_name>` first to verify.

Follow these rules strictly to ensure all terminal operations succeed without errors.
