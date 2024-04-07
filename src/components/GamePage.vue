<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-text-field v-model="sizeX" label="Size X"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field v-model="sizeY" label="Size Y"></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <div class="square-grid">
          <div
            v-for="(row, rowIndex) in rowCount"
            :key="rowIndex"
            class="row"
          >
            <div
              v-for="(col, colIndex) in colCount"
              :key="colIndex"
              class="square"
              @mouseover="toggleSquareColor(rowIndex, colIndex)"
              :style="{ backgroundColor: squares[rowIndex][colIndex] }"
            ></div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, watch, reactive } from 'vue';

export default {
  name: 'SquareGrid',
  setup() {
    const sizeX = ref(0);
    const sizeY = ref(0);

    const rowCount = ref(0);
    const colCount = ref(0);

    const squares = reactive([]);

    watch([sizeX, sizeY], ([newSizeX, newSizeY]) => {
      colCount.value = parseInt(newSizeX + '');
      rowCount.value = parseInt(newSizeY + '');
      if(colCount.value && rowCount.value) {
        generateSquares();
      }

    });

    function generateSquares() {
      squares.length = rowCount.value;
      for (let i = 0; i < rowCount.value; i++) {
        if (!squares[i]) squares[i] = [];
        squares[i].length = colCount.value;
        for (let j = 0; j < colCount.value; j++) {
          squares[i][j] = 'white';
        }
      }
    }
    function toggleSquareColor(rowIndex, colIndex) {
      squares[rowIndex][colIndex] =
        squares[rowIndex][colIndex] === 'white' ? 'blue' : 'white';
    }

    return {
      sizeX,
      sizeY,
      rowCount,
      colCount,
      squares,
      toggleSquareColor,
    };
  },
};
</script>

<style scoped>
.square-grid {
  display: flex;
  flex-wrap: wrap;
  width: fit-content;
}

.row {
  display: flex;
}

.square {
  width: 36px;
  height: 36px;
  border: 1px solid black;
}
</style>
