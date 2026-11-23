<script setup lang="ts"></script> 

<template>
    <div class="container">
        <h2 class="blog-header">Blog Posts</h2>
        <p style="text-align: center; color: var(--text-muted); margin-bottom: 40px;">About things that interest me</p>
        <div class="post-list">
        
            <!-- List Post 1 -->
            <div class="post-card">
                <div 
                    class="blog-thumb"
                    style="background-image: url('assets/thumbnails/L1030254.JPG');"></div>
                <div>
                    <div class="post-meta">5 min read &bull; 2024-06-26</div>
                    <a href="articles/article_1.html">
                        Releasing Your First Music in the Big '26 (as a WNI, SEUMUR HIDUP)
                    </a>
                    <p> The good, the bad, the ugly and why we do it anyway?</p>
                </div>
            </div>
        </div>
        

        <div class="pagination">
            <span>previous</span> &nbsp; <strong>1</strong> &nbsp; <span>2</span> &nbsp; <span>next</span>
        </div>
    </div>
</template>

<style scoped>
a {
    text-decoration: none;
}

a:hover {
    color: var(--btn-primary-hover-bg);
}

.post-list {
    min-height: 70vh;
    margin-left: auto;
    margin-right: auto;
}

.blog-header {
    font-size: 3vh;
    text-align: center;
}

.post-card {
    display: flex;
    max-width: 80vw;
    gap: 20px;
    margin-bottom: 30px;
    background-color: var(--bg-placeholder);
    padding: 20px;
    border-radius: 8px;
    border: 1px solid var(--border-placeholder);
}

.blog-thumb {
    width: 100%;
    max-width: 30%;
    aspect-ratio: 16/9;
    background-color: #1e293b;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 6px;
}

.post-meta {
    font-size: 13px;
    color: #6b7280;
    margin-bottom: 5px;
}

.post-card a {
    margin: 0 0 10px 0;
    font-size: 3vh;
    color: var(--btn-primary-bg);
}

.post-card a:hover {
    color: var(--btn-primary-hover-bg);
}

.post-card p {
    margin: 0;
    color: #4e4e4e;
    font-size: 14px;
}

.pagination {
    text-align: center;
    margin: 40px 0;
    color: #9ca3af;
}

@media screen and (max-width: 800px){
    .post-card{
        flex-direction: column;
        justify-content: center;
        align-items: center;
        aspect-ratio: 1/1;
    }
    .blog-thumb {
        width: 100%;
        min-width: 100%;
    }
}
</style>