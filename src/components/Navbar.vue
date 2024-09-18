<script setup>
import {ref} from 'vue'
import NavbarIconOpen from '@images/NavbarIconOpen.png'
import NavbarIconClose from '@images/NavbarIconClose.png'
import Button from '@components/Button.vue';

const isMenuActive = ref(false)


function toggleIcon(event){
    console.log("buttonClicked")
    isMenuActive.value = !isMenuActive.value;
    console.log (isMenuActive.value);
    
}

</script>


<template>

<div class="bg-secondary  flex justify-between  items-center p-4 h-20">

    <a href="#">
        <img src="./../assets/images/Logo.svg" alt="Al Kahaf Logo" srcset=""   class="h-10 ">
    </a>

    <div class=" bg-red-800 text-xs font-bold  font-montserrat text-primary sm:text-l flex flex-col  self-start  sm:self-center ">
              
            <button @click="toggleIcon" class="sm:hidden  self-center ">
                
                <img :src="isMenuActive?NavbarIconClose:NavbarIconOpen" 
                :alt="isMenuActive?'Close Menu Icon':'Open Menu Icon'" 
                class="h-8 ">
            </button>
            <ul  class="flex flex-col  items-start p-2 py-5 gap-4 sm:items-center sm:flex-row text-xs " >
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