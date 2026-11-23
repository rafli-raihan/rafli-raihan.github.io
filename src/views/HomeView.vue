<script setup lang="ts"></script> 

<template>
  <div id="hero-section">
        <h1 id="hero-title">Hi, how are you?</h1>
        <p class="subtitle">
            Thanks for checking out my website, feel free to explore this little digital corner of mine....
        </p>
        <div class="btn-group">
            <!-- HTML Link Wajib -->
            <RouterLink to="/about" active-class="active" class="btn btn-primary">About Me</RouterLink>
            <RouterLink to="/gallery" active-class="active" class="btn btn-secondary">Galerry</RouterLink>
            <!-- Ntar diganti pake blogs Gallery nya kalo udh full stack
            <a href="about.html" class="btn btn-primary">View About Me &rarr;</a>
            <a href="blog.html" class="btn btn-secondary-alt">View Posts &rarr;</a> -->
        </div>
      </div>
</template>

<style scoped>
#hero-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 45px;
    max-width: 90vw;
    margin: auto;
    min-height: 80vh;
    text-align: center;
    background-image: url('/img/hero_bg.png');
    background-position: top;
    background-repeat: no-repeat;
}

#hero-title {
    font-size: 90px;
    margin-bottom: 10px;
    color: #ffffff;
}

.subtitle {
    font-size: 20px;
    color: #ffffff;
    margin-bottom: 30px;
    max-width: 600px;
}

.btn-group {
    display: flex;
    gap: 15px;
}

@media screen and (max-width:800px) {
    #hero-title {
        font-size: 50px;
    }

    .subtitle{
        font-size: 14px;
    }

    #hero-title, .subtitle{
        padding: 0 40px 0 40px;
    }

    .btn-group{
        flex-direction: column;
    }
}
</style>
