<template>
  <BiVueMindmap ref="bi-vue-mindmap" :flatNodes="mindmapNodes" />
</template>
<script>
import BiVueMindmap from "bi-vue-mindmap";
export default {
  components: {
    BiVueMindmap,
  },
  data() {
    return {
      mindmapNodes: [
      {
          id: "Index",
          parentId: null,
          title: "Index",
          extra: {
            a: 1,
            b: "x",
          }
        },
        {
          id: "Page",
          parentId: "Index",
          title: "Page",

        },
        {
          id: "bottomSheet",
          parentId: "Index",
          title: "bottomSheet",

        },
        {
          id: "dialog",
          parentId: "Index",
          title: "dialog",

        },
        {
          id: "AppLock",
          parentId: "Page",
          title: "AppLock",
          isFolded: true,
          resources: [
            {
              type: "PIC",
              url: require("/Users/qingdu/Desktop/position/appLock.png")
            }
          ]
        },
        {
          id: "NavBar",
          parentId: "AppLock",
          title: "NavBar",
          extra: {
            a: 3,
            b: "x",
          },
          resources: [
            {
              type: "PIC",
              url: require("/Users/qingdu/Desktop/position/appLock,appLock,navBar.png")
            }
          ]
        },       
        {
          id: "backButton",
          parentId: "NavBar",
          title: "backButton",
          resources: [
            {
              type: "PIC",
              url: require("/Users/qingdu/Desktop/position/appLock,appLock,navBar,backButton.png")
            }
          ]
        },
        {
          id: "#setting",
          parentId: "AppLock",
          title: "setting",
        },{
          id: "#me",
          parentId: "#setting",
          title: "me",
        },
        {
          id: "#root",
          parentId: "#me",
          title: "root",
        }
      ],
    };
  },
};
</script>