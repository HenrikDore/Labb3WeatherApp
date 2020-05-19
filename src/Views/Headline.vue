<template>
    <div class = "headline-wrapper">
        <div class="headlineTxt">
            <h1>{{headline}}</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    props: ["headline"]
};
</script>

<style scoped>


.headlineTxt {
    padding: 15px;
    text-align: center;
}

</style>