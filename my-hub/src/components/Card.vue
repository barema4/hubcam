<template>
<div class="remote">
    <h1 class="text"><i class="fas fa-hand-point-right"></i>Hiring Remotely? Reach 1000,000+ remote workers on the <i class="fab fa-trophy"></i> #1 remote jobs board</h1>
    <button class="job">Post a Job-$299</button>
    <button class="hide">Hide this</button>

</div>

</template>
<style scoped>
.remote{

    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid lightgrey;
    width: 100%;
    height: 3.5rem;
    border-radius: 5px;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);

}
.text{
  font-size: 14px;
}
.job{
       margin: 5px;
       border-color: red;
       border-radius: 5px;
       height: 36px;
       color: white;
       background-color: red;
}
.hide{
    margin: 5px;
    border-color: red;
    border-radius: 5px;
    color:red;
    height: 36px;
    padding-right: 10px;
}
@media only screen and (max-width: 600px) {
    .text{
         text-align: justify;
         padding: 3px;
         font-size: 12px;

}
}

</style>
