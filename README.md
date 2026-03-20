# jmKMS-Paper-Formal

Content repository for formal papers: raw PDFs and generated Markdown for [jmKMS](../jmKMS/). This layout matches the **Scenario A (single document)** structure in the engine README.

## Layout

```txt
jmKMS-Paper-Formal/
├── raw_pdfs/          # Put PDFs here (upload your files)
├── docs/              # Generated output; one subfolder per paper
│   └── <paper_slug>/
│       ├── content.md
│       └── assets/
├── mkdocs.yml         # Optional: MkDocs Material site config
└── README.md
```

## Workflow

1. Install the engine (once per machine / venv):

   ```sh
   cd ../jmKMS && pip install -e .
   ```

2. Upload a PDF under `raw_pdfs/`, e.g. `raw_pdfs/my_paper.pdf`.

3. Parse into `docs/` (output folder name = your choice, usually matching the PDF stem):

   ```sh
   cd jmKMS-Paper-Formal
   jmkms parse -i ./raw_pdfs/my_paper.pdf -o ./docs/my_paper/ -b pipeline
   ```

4. (Optional) Add the paper to `mkdocs.yml` under `nav`, then preview the site:

   ```sh
   pip install mkdocs-material
   mkdocs serve
   ```

## Notes

- Image links inside `content.md` use paths like `assets/eq_1.png` (relative to that paper folder).
- After the first successful parse, register the page in `mkdocs.yml` → `nav` so it appears in the sidebar.
