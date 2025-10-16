# 🚀 Portfolio Hendel Santos

Um portfólio moderno e criativo desenvolvido com HTML, CSS e JavaScript puro, apresentando elementos de programação criativa e design inovador.

## ✨ Características

### 🎨 Design & Experiência

- **Interface Moderna**: Design dark com gradientes neon e elementos cyberpunk
- **Animações Criativas**: Efeitos de typing, parallax, particles e transições suaves
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Acessibilidade**: Navegação por teclado e elementos semânticos

### 🔥 Funcionalidades Interativas

- **Background Animado**: Sistema de partículas interativo
- **Typing Animation**: Efeito de máquina de escrever no hero
- **Scroll Animations**: Elementos aparecem conforme o scroll
- **Menu Mobile**: Hamburger menu responsivo
- **Code Window**: Simulação de editor de código
- **Terminal Effect**: Animação de terminal com typing
- **Form Validation**: Formulário de contato interativo
- **Easter Egg**: Efeito Matrix com código Konami
- **Cursor Trail**: Rastro de cursor personalizado

### 💻 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica moderna
- **CSS3**: Grid, Flexbox, Custom Properties, Animations
- **JavaScript ES6+**: Módulos, Arrow Functions, Async/Await
- **Particles.js**: Sistema de partículas
- **Font Awesome**: Ícones vetoriais
- **Google Fonts**: Typography (Inter + JetBrains Mono)

## 🛠️ Estrutura do Projeto

```
Site_Hendel_v3/
│
├── index.html          # Estrutura principal
├── styles.css          # Estilos e animações
├── script.js           # Funcionalidades JavaScript
└── README.md          # Documentação
```

## 🚀 Como Executar

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/hendelsantos/Site_Hendel_v3.git
   cd Site_Hendel_v3
   ```

2. **Abra no navegador**:

   - Simplesmente abra o arquivo `index.html` no seu navegador
   - Ou use um servidor local como Live Server no VS Code

3. **Para desenvolvimento**:

   ```bash
   # Com Python
   python -m http.server 8000

   # Com Node.js
   npx serve .
   ```

## 📱 Responsividade

O site é totalmente responsivo com breakpoints em:

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🎯 Seções do Portfolio

### 🏠 Hero Section

- Apresentação principal com efeito typing
- Links para redes sociais
- Simulação de código em tempo real
- Scroll indicator animado

### 👨‍💻 Sobre Mim

- Descrição profissional
- Estatísticas em cards
- Terminal simulado
- Efeitos de parallax

### 🛠️ Skills

- Categorias: Backend, Dados & IA, Frontend
- Cards interativos com hover effects
- Ícones e animações

### 💼 Projetos

- Cards dinâmicos com projetos reais do GitHub
- Links para repositórios e demos
- Tags de tecnologias
- Efeitos de hover e animações

### 📞 Contato

- Formulário funcional com validação
- Informações de contato
- Links diretos para email e GitHub
- Feedback visual

## 🎨 Paleta de Cores

```css
:root {
  --primary-color: #00d4ff; /* Cyan neon */
  --secondary-color: #ff6b6b; /* Coral */
  --accent-color: #4ecdc4; /* Turquoise */
  --bg-dark: #0a0a0a; /* Background principal */
  --bg-darker: #050505; /* Background mais escuro */
  --bg-card: #1a1a1a; /* Cards */
  --text-primary: #ffffff; /* Texto principal */
  --text-secondary: #b0b0b0; /* Texto secundário */
  --text-muted: #666666; /* Texto esmaecido */
}
```

## 🔧 Customização

### Alterando Projetos

Edite o array `projectsData` em `script.js`:

```javascript
const projectsData = [
  {
    title: "Seu Projeto",
    description: "Descrição do projeto",
    tech: ["Tech1", "Tech2"],
    icon: "fas fa-icon",
    github: "https://github.com/...",
    demo: "https://...",
  },
];
```

### Modificando Cores

Altere as variáveis CSS em `:root` no `styles.css`:

```css
:root {
  --primary-color: #sua-cor;
  --secondary-color: #sua-cor;
  /* ... */
}
```

### Adicionando Animações

Use as classes utilitárias:

- `.fade-in` - Fade in no scroll
- `.slide-in-left` - Slide da esquerda
- `.slide-in-right` - Slide da direita
- `.float` - Animação de flutuação
- `.pulse` - Efeito de pulso

## ⚡ Performance

- **Lazy Loading**: Imagens carregadas sob demanda
- **Throttled Events**: Eventos de scroll otimizados
- **CSS Animations**: Hardware acceleration
- **Minified Assets**: Para produção

## 🎯 SEO & Acessibilidade

- Meta tags otimizadas
- Estrutura semântica
- Alt texts em imagens
- Navegação por teclado
- Contraste adequado
- ARIA labels

## 🐛 Easter Eggs

1. **Código Konami**: ↑↑↓↓←→←→BA - Ativa o modo Matrix
2. **Console Messages**: Mensagens especiais no console do navegador
3. **Hover Effects**: Efeitos especiais em vários elementos

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:

- Reportar bugs
- Sugerir melhorias
- Submeter pull requests

## 📞 Contato

- **Email**: hendelosantos@outlook.com
- **GitHub**: [hendelsantos](https://github.com/hendelsantos)
- **Website**: [hendelcode.com.br](https://hendelcode.com.br)

---

⚡ **Transformando café em código desde sempre** ☕ → 💻

_Desenvolvido com ❤️ por Hendel Santos_
