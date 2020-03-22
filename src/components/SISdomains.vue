<template>
<div class="domainsClass">
  <h2>Domains for Behaviours</h2>
  <div class="para">
  <p></p>
  </div>
  <div class="links">
    <h4>Helpful links</h4>
    <li><a href="www.google.com">www.google.com</a></li>
    <li><a href="www.google.com">www.google.com</a></li>
    <li><a href="www.google.com">www.google.com</a></li>
  </div>
  <div>
<!--buttons to go in here-->
  </div>
</div>

</template>

<script>
export default {
  name: 'SISdomains',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.domainsClass{
  position: absolute;
top:  18%;
left: 17%;
width: 82%;
height: 80%;
background: #FFFFFF 0% 0% ;
box-shadow: 0px 3px 6px #00000029;
border-radius: 30px;
opacity: 1;

}

.domainsClass h2{
padding-left: 40px;
text-align: left;
letter-spacing: 0;
color: #206AA2;
opacity: 1;
}
.para{
  width: 50%;
  float: left;
  padding-left: 40px;
  padding-top: 0px;
}

.links{
width: 40%;
margin-right: 5%;
padding-left:5%;
padding-bottom: 5%;
float: right;
background: #47CACC2B 0% 0% no-repeat padding-box;
box-shadow: 7px 7px 34px #28282836;
border: 2px solid #67CBCD;
border-radius: 21px;
opacity: 1;
margin-top: -100px;
}

.caseNameField{
  width: 95%;
  margin-left: 3%;
  position: absolute;
  margin-top: 15%;
  height: 10%;
  top: 215;
  
}

</style>
