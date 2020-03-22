import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import DTIdescription from '@/components/DTIdescription'
import DTIevidence from '@/components/DTIevidence'
import DTIwhowillchange from '@/components/DTIwhowillchange'
import SISbehaviours from '@/components/SISbehaviours'
import SISdomains from '@/components/SISdomains'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {

      path: '/dti-description',
      name: 'DTIdescription',
      component: DTIdescription
    },
    {

      path: '/dti-evidence',
      name: 'DTIevidence',
      component: DTIevidence
    
    },
    {
      path: '/dti-whowillchange',
      name: 'DTIwhowillchange',
      component: DTIwhowillchange 
    },
    {
      path: '/sis-behaviours',
      name: 'SISbehaviours',
      component: SISbehaviours 
    },
    {
      path: '/sis-domains',
      name: 'SISdomains',
      component: SISdomains 
    },
  ]
})

window.addEventListener('load', startFunction);

function startFunction()
{
  
  console.log("CONTENT LOADED");
}