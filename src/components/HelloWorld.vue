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
          id: "xxx",
          parentId: null,
          title: "父节点",
          extra: {
            a: 1,
            b: "x",
          },
        },
        {
          id: "yyy",
          parentId: "xxx",
          title: "子节点",
          extra: {
            a: 2,
            b: "y",
          },
        },
      ],
    };
  },
};
</script>