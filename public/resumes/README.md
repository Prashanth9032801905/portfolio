# Resume Upload Folder

This folder contains uploaded resume files.

## Supported Formats:
- PDF (.pdf)
- Word Document (.doc)
- Word Document (.docx)

## File Naming:
- Files are automatically named with timestamp: `resume-{timestamp}.{extension}`
- Original filename is preserved in the database

## File Size Limit:
- Maximum 5MB per file

## Storage Location:
- Files are stored in `/public/resumes/` folder
- URLs are relative to the domain root
