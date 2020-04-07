<template>
    <v-app-bar app dark>
        <v-spacer></v-spacer>
        <div v-if="isAuth">
            {{$user.username}}
            <v-btn @click="logout" text tile>logout</v-btn>
        </div>
        <div v-else>
            <v-btn text router to="/login" tile>login</v-btn>
            <v-btn text router to="/register" tile>register</v-btn>
        </div>
        
    </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name:'Navbar',
    data: () => ({
      multiLine:true
    }),
    computed:{
        ...mapGetters([
            '$user',
            'isAuth'
        ]),
    },
    methods:{
        ...mapActions([
            'logout'
        ])
    }
}
</script>