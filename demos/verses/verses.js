import ardi from '/@/assets/ardi-min.js'

ardi({
  tag: 'ardi-verses',
  shadow: false,
  props: { query: [String, 'John 1 1-34'] },
  state: () => ({ html: '' }),
  propChange() {
    fetch(
      ['https://api.esv.org', '/v3/passage/html', '/?q=', this.query].join(''),
      {
        headers: {
          Authorization: 'Token 9440aa524a886936a723a0496edaf2d406df48a9',
        },
      }
    )
      .then((res) => res.json())
      .then((json) => (this.html = json.passages[0]))
  },
  template() {
    return this.html
  },
  css: /* css */ `
    @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative&display=swap');
    h2, h3 {
      font-family: Cinzel Decorative
    }
  `,
})