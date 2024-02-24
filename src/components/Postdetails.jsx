import React from 'react'
import SingleAuthor from '../layoutcomponents/SingleAuthor'
import author from '../images/author.jpg'
import { Link } from 'react-router-dom'
import education from '../images/edu.jpg'
const Postdetails = () => {
  return (
    <>
      <div className="postdetails_contener">
        <div className="postdetails_content">
        <div className="postdetails_header">
          <SingleAuthor Author_image={author} author_name="Abhishak" />
          <div className="button_container">
            <Link to={`/post/werwre/edit`} className="edit">Edit</Link>
            <Link to={`/post/werwre/Delete`} className="delete">Delete</Link>
          </div>
        </div>
        <div className="postdetails_footer">
          <h1>This is our first blog post</h1>
          <div className="thumble_image">
            <img src={education} alt="" />
          </div>
          <div className="written_content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sed suscipit doloremque iure magnam. Sint harum corrupti itaque, sequi incidunt quisquam delectus. Dolorem recusandae adipisci officia id ratione quibusdam optio corporis et aliquid. Quaerat a totam eligendi nulla maxime, error odio nemo aspernatur eveniet dolorum velit perspiciatis voluptate maiores aliquam et debitis atque, quod qui doloremque. Hic voluptatem quasi, fuga doloremque reprehenderit modi, aspernatur quas est ducimus molestias dolorem. Qui quidem numquam suscipit consequatur rem aspernatur debitis inventore cum, assumenda amet dolorem impedit possimus dolores voluptatum corporis dicta voluptate enim quos at iusto, ut molestias magni. Itaque rem tempore adipisci.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt dicta maxime debitis, porro maiores, obcaecati quos doloribus minus cum sed quae aut adipisci eos vitae, molestiae nemo enim cupiditate autem hic saepe quidem perferendis facere quasi iusto. Nobis sit aliquid saepe nemo veniam facere assumenda pariatur illum at omnis veritatis quo, tempore voluptate facilis est magni et dolorum quis incidunt? Cumque, ipsam. Vel quae optio delectus neque reprehenderit, voluptates illum dolor in pariatur ducimus tempora velit unde odio accusamus, fugiat doloribus quia repellat deleniti quod error beatae nihil! Similique itaque, mollitia, adipisci voluptatibus amet numquam unde architecto quisquam voluptas excepturi suscipit inventore autem consequatur delectus totam, eveniet dicta eaque. Incidunt, magni vel cum, molestiae libero ducimus inventore itaque officiis deserunt minima, odio saepe debitis officia repellendus nesciunt obcaecati nobis quia! Accusamus mollitia obcaecati esse aliquam quia. Commodi dolore ipsum, corporis vero quod sequi odio. Sed quasi accusantium ab porro ad vero ratione accusamus dolorum error minima ut, exercitationem voluptatum saepe nisi magni quos maiores reiciendis cupiditate sunt excepturi sapiente omnis sit quia minus. Minus consequuntur, ipsa facere illum, libero assumenda iste veniam quisquam distinctio reiciendis impedit eum! Maiores at, unde officiis vero minus assumenda fugit qui, explicabo enim laboriosam sapiente fugiat officia perferendis et distinctio beatae accusantium, aliquid neque voluptatum optio ea impedit quas? Aspernatur deserunt obcaecati quisquam, voluptatibus error natus repellendus voluptates magni quos ut sit tenetur sequi nobis, dolores ratione quas vel vero quaerat nihil corporis in perspiciatis! Velit, sit? Modi optio libero non eum nostrum dolor minima vitae corporis iure voluptates, praesentium rem dolorum voluptatum, eius cum. Fuga doloribus iusto eum? Tenetur impedit nisi nihil optio mollitia deserunt praesentium nesciunt, eveniet sapiente voluptatibus quas corrupti doloremque non quia totam. Nisi asperiores itaque mollitia aliquam magnam non reiciendis distinctio? Harum deserunt aliquid saepe odit aspernatur eveniet praesentium et.
          </p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga earum quas asperiores. Ducimus saepe optio minima quos doloribus voluptatem rerum ut, ab amet modi maxime sapiente. Libero facilis excepturi sit reiciendis cum, sapiente cumque atque sed voluptate corporis rerum nostrum asperiores, porro, tenetur deserunt reprehenderit eius voluptas. Dolor iure adipisci quis libero nihil, soluta error. Optio quibusdam fuga ut eum molestias harum soluta, officia dicta tempora possimus quam sint magni perferendis cupiditate? Dicta quis aperiam sed ipsum alias fugiat nam aliquam tempore fuga, ab consequuntur, expedita tenetur eius dignissimos nulla facilis enim perferendis eligendi voluptatum autem quaerat cupiditate maxime! Vitae ipsam voluptates officia harum nisi ex adipisci error, tempore ab ducimus dignissimos culpa sint eius accusantium impedit eos commodi suscipit. Repellendus soluta voluptatibus facilis nesciunt fugit quod vitae, veritatis unde minima dignissimos eligendi dolorum voluptas deleniti alias doloribus. Perferendis inventore numquam vitae aliquam, excepturi rerum cum hic. Eveniet, quod cupiditate.</p>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Postdetails