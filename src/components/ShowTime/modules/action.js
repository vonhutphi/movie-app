import Axios from "axios";
import * as ActionType from "./constant";

export const getTheaterSystemListAction = () => {
  let theaterSystemArray = [];
  return (dispatch) => {
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
      method: "GET",
    })
      .then((res) => {
        theaterSystemArray = res.data;
      })
      .then(() => {
        let arrayPromise = [];
        for (let lichChieu of theaterSystemArray) {
          const promise = Axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${lichChieu.maHeThongRap}&maNhom=GP03`,
          }).then((res) => {
            lichChieu.mangLichChieu = res.data;
          });
          arrayPromise.push(promise);
        }
        Promise.all(arrayPromise).then(() => {
          //   dispatch({
          //     type: ActionType.GET_THEATER_SYSTEM_LIST,
          //     theaterSystemArray: theaterSystemArray,
          //   });
          let arrPro = [];
          for (let lichChieu of theaterSystemArray) {
            const promise = Axios({
              url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${lichChieu.maHeThongRap}`,
            }).then((res) => {
              lichChieu.cumRap = res.data;
            });
            arrPro.push(promise);
          }
          Promise.all(arrPro).then(() => {
            dispatch({
              type: ActionType.GET_THEATER_SYSTEM_LIST,
              theaterSystemArray: theaterSystemArray,
            });
          });
        });
      })
      //   .then(() => {
      //     let arrayPromise = [];
      //     for (let lichChieu of theaterSystemArray) {
      //       const promise = Axios({
      //         url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${lichChieu.maHeThongRap}`,
      //       }).then((res) => {
      //         lichChieu.cumRap = res.data;
      //       });
      //       arrayPromise.push(promise);
      //     }
      //     Promise.all(arrayPromise).then(() => {
      //       dispatch({
      //         type: ActionType.GET_THEATER_SYSTEM_LIST,
      //         theaterSystemArray: theaterSystemArray,
      //       });
      //     });
      //   })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
};
