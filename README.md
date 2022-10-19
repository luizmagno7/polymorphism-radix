# Polimorfismo de component com radix

---

Projeto baseado no conteúdo da Rocketseat 🚀

![Imagem ilustrativa do video](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2dfcbe1d-989a-4ca6-ae3e-ad956bee4a89/Untitled.png)

[Vídeo referência](https://www.youtube.com/watch?v=zhgbanI0UV8)

## Princípio do polimorfismo

Na programação orientada a objetos, o polimorfismo permite que referências de tipos de classes mais abstratas representem o comportamento das classes concretas que referenciam. Assim, é possível tratar vários tipos de maneira homogênea. O termo polimorfismo é originário do grego e significa "muitas formas".

Exemplo: 

Classe abstrata “Animal” - método “Fazer barulho”

→ Classes derivadas 

→ Cachorro

→ Gato

→ Pássaro

 

## Componente polimorfo

Nosso componente é um botão mas em alguns casos deve se comportar como uma tag <a>.

Por questões de acessibilidade e semântica, devemos deixar apenas que o componente retorne a tag compatível com sua instância.