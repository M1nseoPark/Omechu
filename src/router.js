import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import survey_start from '@/components/survey_start'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            // 루트 페이지는 main으로 설정해 둠 
            path: '/', name: 'home', component: main
        },
        {
            path: '/main', name: 'main', component: main
        },
        {
            path: '/survey_start', name: 'survey_start', component: survey_start
        }
    ]
})