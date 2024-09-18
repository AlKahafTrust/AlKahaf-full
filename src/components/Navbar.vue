<script setup>
import {ref,onMounted, onBeforeUnmount} from 'vue'
import NavbarIconOpen from '@images/NavbarIconOpen.svg'
import NavbarIconClose from '@images/NavbarIconClose.svg'
import Button from '@components/Button.vue';

const isMenuActive = ref(false)

function toggleIcon(event){
    console.log("buttonClicked")
    isMenuActive.value = !isMenuActive.value;
    console.log (isMenuActive.value);
}

function handleResize(){
    if (document.documentElement.clientWidth > 640){
    
    isMenuActive.value=true;

    }
}
onMounted(()=>{
    handleResize();
    window.addEventListener('resize',handleResize)
})


</script>


<template>

<div class="bg-secondary  flex justify-between  items-center py-4 h-20">

    <a href="#">
        <img src="./../assets/images/Logo.svg" alt="Al Kahaf Logo" srcset=""   class="h-10 ">
    </a>

    <div :class="[{ 'h-screen': isMenuActive },
     'bg-secondary sm:h-fit text-xs font-bold  font-montserrat text-primary sm:text-l flex flex-col self-start  sm:self-center justify-center ' ]">
              
            <button @click="toggleIcon" class="sm:hidden  self-center ">
                
                <img :src="isMenuActive?NavbarIconClose:NavbarIconOpen" 
                :alt="isMenuActive?'Close Menu Icon':'Open Menu Icon'" 
                class="h-8 ">
            </button>
            <ul  :class="[{ 'hidden': !isMenuActive },
    'flex flex-col  items-start px-6 pt-6 sm:pt-0 gap-4 sm:items-center sm:flex-row text-xs']" >
                <li class="  "><a href="#">Home</a></li>
                <li class=" "><a href="#">About Us</a></li>
                <li class=" "><a href="#"></a>Contact Us</li>
                <li class=" "><a href="#"></a>Our Projects</li>
                <li class=" "><a href="#"></a>News</li>
                <li class="">  <Button/> </li>
            </ul>

    </div>
</div>



</template>

<style scoped>


</style>