import { createSlice } from "@reduxjs/toolkit"; // Import hàm createSlice từ thư viện @reduxjs/toolkit

const initialState = {
  // Khởi tạo state ban đầu của slice
  value: 0, // Khởi tạo giá trị của value là 0
};

export const counterSlice = createSlice({
  // Tạo một slice với tên là 'counter'
  name: "counter", // Đặt tên cho slice là 'counter'
  initialState, // Sử dụng initialState đã khai báo ở trên
  reducers: {
    // Các reducers cho slice
    increment: (state) => {
      // Reducer cho action increment
      // Redux Toolkit cho phép viết logic "mutating" trong reducers.
      // Nó không thực sự thay đổi trạng thái vì nó sử dụng thư viện Immer,
      // mà phát hiện các thay đổi trong "draft state" và tạo ra một trạng thái mới hoàn toàn không thay đổi dựa trên những thay đổi đó.
      state.value += 1; // Tăng giá trị của state.value lên 1
    },
    decrement: (state) => {
      // Reducer cho action decrement
      state.value -= 1; // Giảm giá trị của state.value đi 1
    },
    incrementByAmount: (state, action) => {
      // Reducer cho action incrementByAmount
      state.value += action.payload; // Tăng giá trị của state.value thêm một lượng được chỉ định bởi action.payload
    },
    resetvalue: (state) => {
      // rest biến về không
      state.value = 0;
    },
    squarevalue: (state) => {
      //bình phương biến đếm
      state.value = state.value * state.value;
    },
  },
});

// Action creators được tạo ra cho mỗi reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  resetvalue,
  squarevalue,
} = counterSlice.actions; // Tạo ra các action creators từ các reducer đã được định nghĩa

export default counterSlice.reducer; // Xuất reducer của slice để sử dụng trong Redux store
