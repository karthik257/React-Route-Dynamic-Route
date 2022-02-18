import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css";

function ProductDetails() {
  let { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    fetch(`http://localhost:8000/posts/${id}`)
      .then((response) => {
        console.log("first");
        return response.json();
      })
      .then((data) => {
        console.log(data);
        return setProduct(data);
      })
      .catch((err) => {
        console.log("third");
        return console.log("error");
      });
  };

  return (
    <div>
      {JSON.stringify(product) === "{}" ? (
        <h2>Cannot find product detail</h2>
      ) : (
        <div>
          <h1>Product Details ID = {id}</h1>
            <div className={styles.containerDiv}>
            <h3>Product Name : {product.name} </h3>
              <h3>Product Price : {product.price}</h3>
              <h3>Product Description</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              expedita hic tempore repellendus veniam. Eveniet numquam iure qui
              molestiae odit beatae ipsa ad cumque fugiat, sapiente ex
              recusandae harum unde. Amet fugit rem laudantium alias sequi
              explicabo repudiandae blanditiis ea, ipsam animi odio. Laborum
              quisquam neque quae officiis veniam delectus dolorum aut illo
              vitae. Facilis quo suscipit deserunt, veniam maxime, officiis et
              illo ea obcaecati alias quibusdam! Magni nostrum sapiente illum
              distinctio rerum, sed natus et eveniet quisquam commodi
              consectetur totam? Corporis ducimus tempore quia ex cupiditate
              pariatur nisi deserunt nemo voluptates quasi consectetur velit
              optio recusandae blanditiis repellendus mollitia, ab, libero
              perspiciatis hic? Odit repudiandae nesciunt quidem est et debitis
              delectus, cupiditate hic perferendis quia libero maiores vero
              incidunt quo facilis. Deleniti, a voluptatem, quibusdam inventore
              dolorem repudiandae iusto cumque deserunt eos, quisquam numquam
              est possimus facere quidem labore perspiciatis distinctio
              consequatur tempora repellat. Quae ab, est soluta illum ullam
              quidem totam, error sit, repudiandae facere debitis nemo cum omnis
              hic at ipsum eum ratione atque odit nobis. Labore at quasi eaque
              necessitatibus, fugit quo amet est dolorem dolorum autem cumque?
              Odio optio hic odit labore, assumenda recusandae dolor eveniet
              asperiores sapiente id aspernatur delectus aut, ab, dolorum quae
              nisi. Quasi sapiente officia quisquam qui? Sint omnis est
              excepturi velit vel, rerum quia, repellendus officia perspiciatis
              voluptatibus saepe! Cumque eos dolores distinctio, perspiciatis
              odit omnis officiis numquam accusantium nulla voluptate,
              cupiditate nihil sed consequatur libero assumenda. Labore
              accusantium dicta atque iste odit earum, odio exercitationem
              maxime magni ut quos error quidem eum nobis perferendis dolores
              animi. Ipsa quae assumenda, temporibus ea magnam inventore laborum
              voluptates obcaecati, ex suscipit, enim aliquam distinctio error!
              Unde minima veniam voluptatibus corporis ipsum quod quos magni at
              ullam voluptatum hic quasi dolorum sapiente aspernatur accusamus
              facilis eaque doloremque suscipit ratione quae, iure doloribus
              perspiciatis illum. Eaque officia cumque nesciunt beatae eligendi
              error eveniet dolor quam aut. Sint ea, nobis magnam eveniet
              beatae, officia facilis dicta corporis libero dolore temporibus
              nemo iure? Est corrupti autem impedit animi blanditiis
              consequuntur explicabo aspernatur doloremque rerum dolorem
              voluptatum, eius cum repellat aperiam tempore architecto possimus
              alias? Excepturi molestiae earum ipsam vitae distinctio temporibus
              molestias, eum aut sint libero! Rem tempora error inventore sit.
              Cupiditate aspernatur ad aliquam asperiores possimus molestias
              unde sunt. Qui hic animi corrupti aperiam cumque debitis. Quos
              alias doloribus harum, officiis omnis tempora, dolores ex fuga
              ipsum adipisci labore nihil voluptas explicabo laborum voluptatum
              iste sint! Iusto officiis error assumenda molestias optio aliquam
              totam nostrum aspernatur repellendus hic dolor impedit, ut
              accusamus quo possimus dolorem. Eligendi est tempore autem
              suscipit voluptas quae sapiente voluptate amet libero! Distinctio
              officia animi inventore provident numquam quos eligendi quasi quod
              accusantium? Alias delectus nihil vero debitis aliquid, doloremque
              labore ab maiores cum vel ea quibusdam numquam tempore quisquam
              et? Laborum, a! Tempore nobis reiciendis natus nam sapiente
              accusantium aspernatur, veritatis similique inventore fugiat quam
              recusandae quod suscipit deleniti exercitationem omnis itaque
              quasi fugit rem rerum optio consectetur doloribus! Magnam
              laboriosam voluptas officia saepe, ullam consectetur sint nulla
              autem! Earum!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
