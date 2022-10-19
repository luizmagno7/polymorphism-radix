# Polimorfismo de component com radix

---

Projeto baseado no conteúdo da Rocketseat 🚀

![Imagem ilustrativa do vídeo](https://user-images.githubusercontent.com/7591530/196591839-c6e6a5ed-b2c0-42fb-8dfb-802ee143c04c.png)

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

> botões em tela

![Botões](https://user-images.githubusercontent.com/7591530/196591750-e9f5b735-25c1-4716-8196-e27da9aa9c33.png)

> resultado no DOM

![image](https://user-images.githubusercontent.com/7591530/196592029-4ea34bcd-2f3f-4bc4-8816-43219714f560.png)
