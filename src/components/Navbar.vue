<script setup>
import Button from '@components/Button.vue';
</script>


<template>

<div class="bg-secondary flex justify-between items-center py-4">

    <a href="#">
        <img src="./../assets/images/Logo.svg" alt="Al Kahaf Logo" srcset=""   class="h-8 sm:h-15 ">
    </a>

    <div class="text-xs font-bold  font-montserrat text-primary 
                sm:text-l">
              
            <button>
                <img src="./../assets/images/NavbarIconClose.png" alt="CloseNavbar" class="h-8 sm:hidden">
            </button>
            <ul class=" flex flex-col sm:flex-row ">
                <li class="p-2  "><a href="#">Home</a></li>
                <li class="p-2 "><a href="#">About Us</a></li>
                <li class="p-2 "><a href="#"></a>Contact Us</li>
                <li class="p-2 "><a href="#"></a>Our Programs</li>
                <li>  <Button/> </li>
            </ul>

    </div>
</div>

</template>