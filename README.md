# EE Claudia Francisco da Silva

Site institucional estático da EE Claudia Francisco da Silva, desenvolvido com HTML, CSS e JavaScript.

## Como abrir localmente

Abra o arquivo `index.html` no navegador ou rode um servidor local:

```bash
python3 -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie os arquivos deste projeto para o repositório.
3. No GitHub, entre em `Settings > Pages`.
4. Em `Build and deployment`, escolha:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Salve e aguarde o link do GitHub Pages ficar disponível.

## Estrutura

```text
.
├── index.html
├── style.css
├── script.js
└── assets/
    ├── escola-hero.png
    ├── images.jpeg
    ├── instagram.svg
    ├── sala-do-futuro.webp
    ├── sed.webp
    └── whatsapp.svg
```

## Observação

O projeto usa caminhos relativos, então funciona corretamente tanto em `localhost` quanto no GitHub Pages.
