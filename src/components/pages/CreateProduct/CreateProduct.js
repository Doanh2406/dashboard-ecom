/** @format */

import React, { useState } from "react";
import "./CreateProduct.scss";
import { MdKeyboardArrowRight } from "react-icons/md";
import background from "../../../../src/assets/addIMG.png";

import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/actions/productActions";
import { useHistory } from "react-router";

const categoryList = [
  {
    _id: "616d3cba44465c7dbdec838e",
    name: "Fashion",
    slug: "Thoi-Trang",
    children: [
      {
        _id: "61c9cbbaa18b9cef23ed16cd",
        name: "Shirt",
        slug: "samsung",
        children: [
          {
            _id: "61c9cbbaa18b9cef23ed16cd",
            name: "31Aux",
            slug: "note5",
            children: [],
          },
        ],
      },
    ],
  },
  {
    _id: "616d3cba44465c7dbdec838e",
    name: "Laptop",
    slug: "Thoi-Trang",
    children: [
      {
        _id: "61c9cbbaa18b9cef23ed16cd",
        name: "Dell",
        slug: "samsung",
        children: [
          {
            _id: "61c9cbbaa18b9cef23ed16cd",
            name: "Xps-2022",
            slug: "note5",
            children: [],
          },
        ],
      },
    ],
  },
  {
    _id: "616d3cba44465c7dbdec838e",
    name: "Mobile",
    slug: "Thoi-Trang",
    children: [
      {
        _id: "61c9cbbaa18b9cef23ed16cd",
        name: "Apple",
        slug: "samsung",
        children: [
          {
            _id: "61c9cbbaa18b9cef23ed16cd",
            name: "Iphone 13",
            slug: "note5",
            children: [],
          },
        ],
      },
    ],
  },
  {
    _id: "616d3cba44465c7dbdec838e",
    name: "Camera",
    slug: "Thoi-Trang",
    children: [
      {
        _id: "61c9cbbaa18b9cef23ed16cd",
        name: "Sony",
        slug: "samsung",
        children: [
          {
            _id: "61c9cbbaa18b9cef23ed16cd",
            name: "Synon",
            slug: "note5",
            children: [],
          },
        ],
      },
    ],
  },
  {
    _id: "616d44a144465c7dbdec8390",
    name: "Technology",
    slug: "Cong-Nghe",
    children: [
      {
        _id: "61c9cbbaa18b9cef23ed16cd",
        name: "Windows",
        slug: "note5",
        children: [
          {
            _id: "61c9cbbaa18b9cef23ed16cd",
            name: "Windows 11",
            slug: "note5",
            children: [],
          },
        ],
      },
    ],
  },
  {
    _id: "616d44a144465c7dbdec8390",
    name: "Software",
    slug: "Cong-Nghe",
    children: [
      {
        _id: "61c9cbbaa18b9cef23ed16cd",
        name: "Antivirus ",
        slug: "note5",
        children: [
          {
            _id: "61c9cbbaa18b9cef23ed16cd",
            name: "Bkav",
            slug: "note5",
            children: [],
          },
        ],
      },
    ],
  },
  {
    _id: "616d44a144465c7dbdec8390",
    name: "Tablet",
    slug: "Cong-Nghe",
    children: [
      {
        _id: "61c9cbbaa18b9cef23ed16cd",
        name: "Ipad",
        slug: "note5",
        children: [
          {
            _id: "61c9cbbaa18b9cef23ed16cd",
            name: "Ipad 2022",
            slug: "note5",
            children: [],
          },
        ],
      },
    ],
  },
  {
    _id: "618be3e434604523215c3e6b",
    name: "Mobile",
    slug: "Mobile",
    children: [],
  },
];
const RenderCategory = ({ data, getIndex, getName, getIdCategory }) => {
  return (
    <>
      {data?.map((item, index) => (
        <li
          className="add__pro-category__child"
          key={index}
          onClick={() => {
            getName(item.name);
            if (item.children.length != 0) {
              getIndex(index);
              getIdCategory(item._id);
            }
          }}
        >
          {item.name}
          {item.children.length == 0 ? null : (
            <MdKeyboardArrowRight className="add__pro-category__child-icon" />
          )}
        </li>
      ))}
    </>
  );
};
export default function CreateProduct({ userInfo }) {
  const [isChild, setIsChild] = useState();
  const [isChild2, setIsChild2] = useState();

  const [nameProduct, setNameProduct] = useState();
  const [description, setDescription] = useState();
  const [brand, setBrand] = useState();
  const [origin, setOrigin] = useState();
  const [sex, setSex] = useState();
  const [material, setMaterial] = useState();
  const [feature, setFeature] = useState();
  const [variant, setVariant] = useState([]);

  const [name, setName] = useState("");
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [idCategory, setIdCategory] = useState("");
  const [image, setImage] = useState([]);
  const [modal, setModal] = useState(false);

  const [nameClass, setNameClass] = useState([]);
  const [nameClasify, setNameClasify] = useState();

  const handleOnchange = (e, index) => {
    if (image[index]) {
      image[index] = e.target.files[0];
      const imageFke = [...image];
      setImage(imageFke);
    } else {
      setImage((prev) => [...prev, e.target.files[0]]);
    }
  };
  let textInput = React.useRef();
  const handleChangeValueInput = (e) => {
    if (textInput.current.value != "") {
      setNameClass((prev) => [...prev, textInput.current.value]);
    }
  };
  const handleClear = (e) => {
    textInput.current.value = "";
  };

  const renderTableHeader = (nameClass, index) => {
    // const handleSaveVariant = (e, index, type) => {
    //     const value = e.target.textContent;
    //   if (variant[index] == undefined) {
    //     variant[index] = {};
    //   } else {
    //     if (value.length != 0) {
    //       variant[index][type] = `${value}`;
    //     }
    //   }

    //   const array = [...variant];
    //   return setVariant(array);
    // };

    return nameClass?.map((item, index) => {
      return (
        <tr ref={textInput} key={index}>
          <td contenteditable="true">{item}</td>
          <td contenteditable="true"></td>
          <td contenteditable="true"></td>
          <td contenteditable="true"></td>
          <td contenteditable="true"></td>
          <td contenteditable="true"></td>
        </tr>
      );
    });
  };
 
  let history = useHistory();
  const dispatch = useDispatch();
  let tdInput = React.useRef();
  const handleSubmit = async () => {
    const trData = tdInput.current.children;
    if (trData) {
      Array.from(trData, (item) => {
        variant.push({
          name: `${item.childNodes[0].textContent}`,
          price: `${item.childNodes[1].textContent}`,
          option: `${item.childNodes[2].textContent}`,
          inventory: `${item.childNodes[3].textContent}`,
          width: `${item.childNodes[4].textContent}`,
          height: `${item.childNodes[5].textContent}`,
        });
      });
    }

    const formData = new FormData();
    formData.append("name", nameProduct);
    formData.append("category", idCategory);
    formData.append("description", description);
    formData.append("brand", brand);
    formData.append("sex", sex);
    formData.append("origin", origin);
    formData.append("material", material);
    formData.append("fearture", feature);
    formData.append("sale", 200);
    for (let i = 0; i < image.length; i++) {
      formData.append("productPicture", image[i]);
    }
    
     for (let i = 0; i < variant.length; i++) {
      formData.append(`${variant[i]["name"]}`, variant[i].name);
      formData.append(`${variant[i]["price"]}`, variant[i].price);
      formData.append(`${variant[i]["option"]}`, variant[i].option);
      formData.append(`${variant[i]["inventory"]}`, variant[i].inventory);
      formData.append(`${variant[i]["width"]}`, variant[i].width);
      formData.append(`${variant[i]["height"]}`, variant[i].height);
    }
    // [{prixe.op,a},{}

    await dispatch(addProduct(formData));

    history.push('/products/manager');
  };
  console.log(variant)
  
  return (
    <div className="add__pro-container">
      <div className="add__pro-top">
        <div className="add__pro-name">
          <h3>Product Name</h3>
          <div>
            <p>Product's Name </p>
            <input
              onChange={(e) => setNameProduct(e.target.value)}
              type="text"
              className="add__pro-name-input"
              placeholder="Enter Here"
            />
          </div>
        </div>

        <div className="add__pro-category">
          <h3>Product Category</h3>
          <div className="add__pro-tag-name">
            {name ? (
              <span>
                {name}{" "}
                <MdKeyboardArrowRight className="add__pro-category__child-icon" />
              </span>
            ) : null}
            {name1 ? (
              <span>
                {name1}{" "}
                <MdKeyboardArrowRight className="add__pro-category__child-icon" />
              </span>
            ) : null}
            {name2 ? <span>{name2} </span> : null}
          </div>

          <ul className="add__pro-category__parent">
            <RenderCategory
              data={categoryList}
              getIndex={setIsChild}
              getName={setName}
              getIdCategory={setIdCategory}
            />
          </ul>

          <ul className="add__pro-category__parent">
            <RenderCategory
              data={categoryList[isChild]?.children}
              getIndex={setIsChild2}
              getName={setName1}
              getIdCategory={setIdCategory}
            />
          </ul>
          <ul className="add__pro-category__parent">
            <RenderCategory
              data={categoryList[isChild]?.children[isChild2]?.children}
              getName={setName2}
              getIdCategory={setIdCategory}
            />
          </ul>
        </div>
      </div>
      <div className="add__pro-basic__infor">
        <h3 className="add__pro-basic__infor-title">Basic information</h3>
        <div className="add__pro-basic__infor-img">
          <p>Product Image</p>
          <div className="add__pro-basic__infor-img__group">
            <div className="add__pro-basic__infor-img__group-item">
              <label
                for="myfile0"
                className="add__pro-basic__infor-img__group_label"
                id="showImg"
              >
                <img
                  src={
                    image[0] ? window.URL.createObjectURL(image[0]) : background
                  }
                  alt=""
                  className="add__pro-basic__infor-img__group_avatar"
                />
              </label>
              <input
                onChange={(e) => handleOnchange(e, 0)}
                type="file"
                id="myfile0"
                name="myfile0"
                className="add__pro-basic__infor-img__group_file"
                accept=".jpg,.png"
                hidden
                multiple
              />
            </div>
            <div className="add__pro-basic__infor-img__group-item">
              <label
                for="myfile1"
                className="add__pro-basic__infor-img__group_label"
                id="showImg"
              >
                <img
                  src={
                    image[1] ? window.URL.createObjectURL(image[1]) : background
                  }
                  alt=""
                  className="add__pro-basic__infor-img__group_avatar"
                />
              </label>
              <input
                onChange={(e) => handleOnchange(e, 1)}
                type="file"
                id="myfile1"
                name="myfile1"
                className="add__pro-basic__infor-img__group_file"
                accept=".jpg,.png"
                hidden
                multiple
              />
            </div>
            <div className="add__pro-basic__infor-img__group-item">
              <label
                for="myfile2"
                className="add__pro-basic__infor-img__group_label"
                id="showImg"
              >
                <img
                  src={
                    image[2] ? window.URL.createObjectURL(image[0]) : background
                  }
                  alt=""
                  className="add__pro-basic__infor-img__group_avatar"
                />
              </label>
              <input
                onChange={(e) => handleOnchange(e, 2)}
                type="file"
                id="myfile2"
                name="myfile2"
                className="add__pro-basic__infor-img__group_file"
                accept=".jpg,.png"
                hidden
                multiple
              />
            </div>
            <div className="add__pro-basic__infor-img__group-item">
              <label
                for="myfile3"
                className="add__pro-basic__infor-img__group_label"
                id="showImg"
              >
                <img
                  src={
                    image[3] ? window.URL.createObjectURL(image[0]) : background
                  }
                  alt=""
                  className="add__pro-basic__infor-img__group_avatar"
                />
              </label>
              <input
                onChange={(e) => handleOnchange(e, 3)}
                type="file"
                id="myfile3"
                name="myfile3"
                className="add__pro-basic__infor-img__group_file"
                accept=".jpg,.png"
                hidden
                multiple
              />
            </div>
            <div className="add__pro-basic__infor-img__group-item">
              <label
                for="myfile4"
                className="add__pro-basic__infor-img__group_label"
                id="showImg"
              >
                <img
                  src={
                    image[4] ? window.URL.createObjectURL(image[4]) : background
                  }
                  alt=""
                  className="add__pro-basic__infor-img__group_avatar"
                />
              </label>
              <input
                onChange={(e) => handleOnchange(e, 4)}
                type="file"
                id="myfile4"
                name="myfile4"
                className="add__pro-basic__infor-img__group_file"
                accept=".jpg,.png"
                hidden
                multiple
              />
            </div>
          </div>
        </div>
        <div className="add__pro-basic__infor-description">
          <p>Description</p>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            name=""
            id=""
            cols="10"
            rows="5"
            className="add__pro-basic__infor-description-content"
          ></textarea>
        </div>
      </div>
      <div className="add__pro__detail-infor">
        <h3>Details</h3>
        <div className="add__pro__detail-group">
          <p>Brand</p>
          <select onChange={(e) => setBrand(e.target.value)}>
            <option value="0">Select Brand:</option>
            <option value="IPHONE">IPHONE</option>
            <option value="SAMSUNG">SAMSUNG</option>
            <option value="APPlE">APPlE</option>
            <option value="OPPO">OPPO</option>
            <option value="XIAOMI">XIAOMI</option>
            <option value="GOOGLE">GOOGLE</option>
            <option value="HWUWEI">HWUWEI</option>
            <option value="LG">LG</option>
          </select>
        </div>
        <div className="add__pro__detail-group">
          <p>Origin</p>
          <select onChange={(e) => setOrigin(e.target.value)}>
            <option value="0">Select origin:</option>
            <option value="VietNam">VietNam</option>
            <option value="ThaiLan">ThaiLan</option>
            <option value="Korea">Korea</option>
            <option value="Japan">Japan</option>
            <option value="USA">USA</option>
            <option value="another">another</option>
          </select>
        </div>
        <div className="add__pro__detail-group">
          <p>Sex</p>
          <select onChange={(e) => setSex(e.target.value)}>
            <option value="0">Select Sex:</option>
            <option value="unisex">unisex</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>
        <div className="add__pro__detail-group">
          <p>Material</p>
          <select onChange={(e) => setMaterial(e.target.value)}>
            <option value="0">Select Material:</option>
            <option value="Verlet">Verlet</option>
            <option value="plastic">plastic</option>
            <option value="Alunium">Alunium</option>
            <option value="Draper">Draper</option>
            <option value="Paper">Paper</option>
            <option value="Steel">Steel</option>
            <option value="Carton">Carton</option>
          </select>
        </div>
        <div className="add__pro__detail-group">
          <p>Feature</p>
          <input
            onChange={(e) => setFeature(e.target.value)}
            type="text"
            className="add__pro__detail-fearture"
          />
        </div>
      </div>
      <div className="add__pro__sale-infor">
        <h3>Sale Informations</h3>
        <div className="add__pro__sale-infor-classify">
          <div className="add__pro__sale-infor-classify-header">
            <p>Name Classify</p>
            <input
              onBlur={(e) => setNameClasify(e.target.value)}
              type="text"
              className="add__pro__sale-infor-classify-name"
            />
            {!nameClasify ? <button>Next</button> : null}
          </div>
          {nameClasify ? (
            <>
              <div className="add__pro__sale-infor-classify-go">
                <input
                  ref={textInput}
                  type="text"
                  className="add__pro__sale-infor-classify-go-item"
                />
                <div className="add__pro__sale-infor-classify-go-button">
                  <button onClick={handleChangeValueInput}>Add Classify</button>
                  <button onClick={handleClear}>Clear</button>
                </div>
              </div>
              <div className="add__pro__sale-infor-classify-infor">
                <table>
                  <thead>
                    <tr>
                      <td contenteditable="true">{nameClasify}</td>
                      <td contenteditable="true">Price</td>
                      <td contenteditable="true">Option</td>
                      <td contenteditable="true">Inventory</td>
                      <td contenteditable="true">Width</td>
                      <td contenteditable="true">Height</td>
                    </tr>
                  </thead>
                  <tbody ref={tdInput}>{renderTableHeader(nameClass)}</tbody>
                </table>
              </div>
            </>
          ) : null}
        </div>
      </div>
      <div className="add__pro-container__action">
        <button
          onClick={() => setModal(!modal)}
          className="add__pro-container__action-cancel"
        >
          Cancel
        </button>
        {modal ? (
          <div className="modal-toast">
            <div className="modal-container">
              <p>Are You Sure ?</p>
              <div
                onClick={() => setModal(!modal)}
                className="modal-container-button"
              >
                <button className="cancel">Cancle</button>
                <button className="">Yes</button>
              </div>
            </div>
          </div>
        ) : null}
        <button
          onClick={() => handleSubmit()}
          className="add__pro-container__action-submit"
        >
          Save
        </button>
      </div>
    </div>
  );
}
