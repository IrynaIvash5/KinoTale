<template>
<div class="block-text">
    <h2 class="text-h2">Фільми з перекладом дивитися онлайн</h2>
    <p class="p-text">
        Вітаємо на сайті KinoTale! Бажаємо приємного перегляду!
    </p>
    <p class="p-text">
        Зручна навігація допоможе знайти фільм до душі, будь то легка комедія, детективна 
        історія, триллер, бойовик, історія минулого, любовна мелодрама, захоплююча пригода,
        інтригуюча фантастика, спортивні досягнення або охолоджуючі кров фільми жахів.
    </p>
    <p class="p-text">
        Залишайтесь з нами, діліться коментарями і враженнями з іншими користувачами, 
        можливо дякуючи саме вашому відгуку хтось відкриє для себе чудові фільми.
    </p>
</div>
</template>

<script>
export default {
    name: 'Information'
}
</script>

<style>

.block-text{
    width: 100%;
}

.text-h2 {
    margin-left: 14px;
    padding-top: 10px;
    font-family: Comic Sans MS, Comic Sans, cursive;
}

.p-text {
    margin-left: 14px;
    padding-top: 5px;
    /* color: rgb(240, 240, 150); */
    line-height: 1.4em;
    font-size: 17px;
    font-family: Comic Sans MS, Comic Sans, cursive;
}

@media screen and (min-width: 1920px) {
  .p-text{
    line-height: 1.5em;
    font-size: 20px;
  }
}

@media screen and (min-width: 1920px) {
  .text-h2{
   padding-top: 15px;
  }
}
</style>
