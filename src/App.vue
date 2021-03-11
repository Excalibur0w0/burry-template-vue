<template>
    <div id="app">
        {{test}}
        <Hello></Hello>
    </div>
</template>

<script>
import Hello from '@/components/Hello.js'

export default {
    data () {
        return {
            test: 'adsfasfasdafaffasdda'
        }
    },
    components: {
        Hello
    }
}
</script>