export default {
  changeehere(state,city){ //state,指所有的公用数据
    state.city=city;
    try {
      localStorage.city = city;
    } catch (e) {}

  }
}
