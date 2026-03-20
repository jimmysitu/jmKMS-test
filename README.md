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

## Deploy to GitHub Pages

This repo includes [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml): every push to **`main`** or **`master`** builds MkDocs and deploys to GitHub Pages.

1. Create a new repository on GitHub (e.g. `jmKMS-Paper-Formal`) and push this project:

   ```sh
   git init
   git add .
   git commit -m "Initial content"
   git branch -M main
   git remote add origin https://github.com/<YOU>/jmKMS-Paper-Formal.git
   git push -u origin main
   ```

2. In the GitHub repo: **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).

3. Open **Actions**, wait for **Deploy to GitHub Pages** to finish. The site URL will be:

   `https://<YOU>.github.io/jmKMS-Paper-Formal/`

   (For an organization, replace `<YOU>` with the org name.)

4. Optional: in `mkdocs.yml`, uncomment and fill in **`site_url`** and **`repo_url`** so Material’s search and “edit” links resolve correctly.

**Note:** Only files under `docs/` are published by MkDocs. `raw_pdfs/` stays in the git repo but is not part of the static site unless you link or copy it there.

## Notes

- Image links inside `content.md` use paths like `assets/eq_1.png` (relative to that paper folder).
- After the first successful parse, register the page in `mkdocs.yml` → `nav` so it appears in the sidebar.
