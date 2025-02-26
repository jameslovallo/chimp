import ardi, { css, html } from '../assets/ardi-min.js'

ardi({
  tag: 'app-footer',
  template() {
    return html`
      <footer>
        <p>
          This site was built with
          <app-link><a href="/ramidus">Ramidus</a></app-link>
        </p>
      </footer>
    `
  },
  styles: css`
    :host {
      background: var(--surface-heavy);
      display: block;
      left: 0;
      padding: 1rem 1rem;
      position: sticky;
      text-align: center;
      top: 100vh;
      z-index: 999;
    }
    a {
      color: unset;
      text-decoration-color: var(--theme-color);
    }
  `,
})
