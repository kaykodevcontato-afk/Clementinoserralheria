# Clementino Serralheria — Landing Page

Site institucional responsivo em **HTML, CSS e JavaScript**, pronto para publicar gratuitamente no GitHub Pages.

## Conteúdo da pasta

```text
clementino-serralheria/
├── index.html            ← Conteúdo da página, textos, seções e links
├── style.css             ← Layout, cores e responsividade
├── script.js             ← Menu, formulário, galeria e voltar ao topo
├── README.md
└── assets/
    └── img/              ← Logo e imagens otimizadas
```

## Como publicar no GitHub Pages

1. No GitHub, crie um repositório público, por exemplo `clementino-serralheria`.
2. Clique em **Add file → Upload files** e envie todos os arquivos e a pasta `assets` (deixe `index.html` na raiz do repositório).
3. Clique em **Commit changes**.
4. Vá em **Settings → Pages**.
5. Em **Build and deployment**, escolha **Deploy from a branch**.
6. Em **Branch**, selecione **main** e a pasta **/(root)** e clique em **Save**.
7. Abra o endereço exibido pelo GitHub Pages. Geralmente será `https://SEU-USUARIO.github.io/clementino-serralheria/`.

## Como editar

- **Nome, descrições, serviços, imagens, links e textos:** `index.html`.
- **Cores:** início do `style.css`, no bloco `:root`.
- **Logo:** `assets/img/logo.webp` (versão PNG em `logo.png`).
- **Fotos:** pasta `assets/img/`. Para trocar, substitua o arquivo existente ou altere o `src="assets/img/NOME-DA-FOTO.webp"` no HTML.
- **WhatsApp:** atualmente `+55 87 9623-9973`. Para mudar, use a busca/substituição em `index.html` para os números `558796239973` (links) e `+55 87 9623-9973` (textos), e altere `WHATSAPP_NUMBER` em `script.js`.
- **Formulário:** não precisa de banco de dados. Abre o WhatsApp com uma mensagem pronta, para o cliente conferir e enviar.

**Atenção:** o telefone informado tem 8 dígitos após o DDD. Confira se ele está completo e se é o número correto do WhatsApp antes da divulgação.

**Imagens:** as fotos são ilustrativas, geradas para este projeto, e não devem ser anunciadas como trabalhos reais já executados pela empresa. Você pode trocá-las por fotos de serviços próprios depois.

## Teste local

Abra `index.html` em um navegador. Para testes completos em ambiente local, também pode iniciar um servidor simples na pasta com `python -m http.server 8000` e acessar `http://localhost:8000`.
