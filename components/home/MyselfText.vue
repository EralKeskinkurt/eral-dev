<template>
    <div>
        <main class="myself">
            <div class="myself-text">
                <h1 class="title-text">Hi I'm Eral, <br> <strong>Full stack developer</strong></h1>
                <p>I started software in August 2022. I am trying to develop myself as a full stack in the web field. I love designing websites and developing new projects. I love listening to music and chatting with my friends.</p>
            </div>
        </main>
    </div>
</template>

<style lang="scss">
    .myself{
        .myself-text{
            display: flex;
            flex-direction: column;
            line-height: 1.6rem;
            gap: 10px;
            .title-text{
                font-size: 1.3rem;
                font-weight: 600;
                strong{
                    color: rgba(29,208,93);
                }
            }
            p{
                font-size: 0.9rem;
                color: rgba(255, 255, 255, 0.733);
                font-family: 'Inclusive Sans', sans-serif;
            }
        }
    }
</style>