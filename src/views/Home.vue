<template>
  <div id="home">
    <template>
      <div style="padding: 15px;">
        <v-card class="ma-2" elevation="2">
          <v-row>
            <!-- location -->
            <v-col cols="12" sm="12">
              <v-text-field
                prepend-icon="mdi-map-marker"
                outlined
                v-model="location"
                label="Location"
                :rules="rules"
                hide-details="auto"
              ></v-text-field>
            </v-col>

            <!-- input emp no -->
            <v-col cols="12" sm="12">
              <v-text-field
                class="ma-1"
                @click="clear_all()"
                @keyup="find_emp_withCode(empno)"
                v-model="empno"
                label="Code No."
                :rules="rules"
                hide-details="auto"
                :readonly="computedCondition"
              ></v-text-field>
            </v-col>

            <!--show name  -->
            <v-col v-if="empno != ''" cols="12" sm="12">
              <v-alert
                class="ma-2"
                border="left"
                colored-border
                type="info"
                elevation="2"
              >
                <!-- <h4><b>{{ simple_emp.msg }}</b></h4> -->
                <h4 v-if="simple_emp.msg == 'ok'">
                  <b>
                    <v-icon>mdi-account-outline</v-icon>
                    {{
                      this.simple_emp.first_name + this.simple_emp.last_name
                    }}</b
                  >
                </h4>
                <h4 v-else>Not Found</h4>
              </v-alert>
            </v-col>

            <!-- dwg no  -->
            <v-col cols="12" sm="12">
              <v-text-field
                label="Dwg No."
                ref="dwgno"
                v-model="dwgno"
                @keyup="dwg_action()"
              >
              </v-text-field>
            </v-col>


            <v-col cols="12" sm="12" > 
                    <v-text-field
                      ref="shelf"
                      v-model="shelf"
                      label="Shelf"
                      type="number"
                      @keyup="shelf_action()"
                    ></v-text-field>
            </v-col>

            <!-- images -->
            <v-col cols="12" sm="12" v-if="dwgno">
              <table>
                <tr>
                  <th colspan="2" class="text-center"><h3>Images</h3></th>
                </tr>
                                <tr>
                  <td>
                    <h3>Lamp No. : <font color="#216DC2">{{ lamp_data }}</font></h3>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>
                      Qty : <font color="#216DC2">{{ qty }}</font>

                      <v-btn class="ml-2" color="warning" @click="edit_qty()" dark fab x-small>
                        <v-icon>mdi-pencil</v-icon>
                      </v-btn>

                    <v-text-field
                      v-if="show_input_edit"
                      v-model="qty"
                      label="Edit Qty"
                      type="number"
                    ></v-text-field>

                    </h3>
                  </td>
                </tr>
                <tr>
                  <td>
                    <v-img
                      src="https://picsum.photos/350/165?random"
                      class="grey darken-4"
                      height="100%"
                      width="100%"
                    ></v-img>
                  </td>
                </tr>
              </table>
            </v-col>

            <v-col cols="12" sm="12">
               <v-btn color="green" ref="matching" @click="mactching_action()"dark>Matching</v-btn>
            </v-col>


              <button v-on:click="play" type="button">Click Me to Play Sound</button>
              <audio ref="audioElm" src="../assets/typical-trap-loop-2b-130751.mp3"></audio>


          </v-row>
        </v-card>
      </div>
    </template>
  </div>
</template>
<script>
import api from "../services/api";
export default {
  async mounted() {
    //this.datalist = await api.get_eam_list();
    this.location = this.$route.params.line;
  },
  data() {
    return {
      simple_emp: "",
      datalist: [],
      location: "",
      empno: "",
      dwgno: "",
      qty: 0,
      lamp_data: 0,
      computedCondition: false,
      show_input_edit :false,
      shelf : ""
    };
  },
  methods: {
    play: function(event) {
      this.$refs.audioElm.play();
    },
    async mactching_action(){
      alert("matching")
    },
    async shelf_action(){
      alert("test")
      this.$refs['matching'].scrollIntoView({behavior: "smooth"})

      //alert("test")
      //this.$refs.matching.focus();
      // const el = this.$refs.matching;
      // if (el) {
      //  // Use el.scrollIntoView() to instantly scroll to the element
      //  el.scrollIntoView({behavior: 'smooth'});
      // }
    },
    async dwg_action() {
      this.$refs.shelf.focus();
    },
    async clear_all() {
      this.computedCondition = false;
    },
    async get_full_name() {
      return this.simple_emp.first_name + this.simple_emp.last_name;
    },
    async find_emp_withCode(code) {
      //this.simple_emp = await api.find_emp_withCode({ code: code });
      this.$refs.dwgno.focus(code);
      this.computedCondition = true;
    },
    async savesa() {
      this.datalist = await api.get_eam_list();
    },
    edit_qty() {
      //alert("test")
      this.show_input_edit = !this.show_input_edit;
    },
  },
};
</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 2px solid #dddddd;
  text-align: left;
  padding: 5px;
}
</style>
