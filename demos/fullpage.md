# FullPage

## Demo

> This is an iframe. Hovering or touching it will prevent the page from scrolling.

<iframe src="/assets/fullpage.html" style="height: 400px; width: 100%; border: 0;"></iframe>

<script>
const ts = document.createElement('script')
ts.type="module"
ts.innerHTML = `
	import {lock, unlock} from '//cdn.skypack.dev/tua-body-scroll-lock'
	const frame = document.querySelector('iframe')
	frame?.addEventListener('mouseover', () => {
		lock(document.body)
	})
	frame?.addEventListener('mouseleave', () => {
		unlock(document.body)
	})
`
document.body.appendChild(ts)
</script>

## HTML

```html
<ardi-employee alignment="center"></ardi-employee>
```

## Javascript

[](../components/fullpage.js ':include')