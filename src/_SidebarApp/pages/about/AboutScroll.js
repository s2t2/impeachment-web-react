import React, {Component} from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

export default class Page extends Component {
    render() {
        return (
            <div>
                <div className="sticky-menu">

                    <a href='#section1'>
                        Go to section 1
                    </a>
                    <a href='#section2'>
                        Go to section 2
                    </a>

                </div>

                <ScrollableAnchor id={'section1'}>
                    <div className="full-screen">
                        Hello World Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                        dolorum modi. Doloribus eveniet aspernatur consequatur rerum quas architecto
                        temporibus perferendis nostrum? Esse saepe aperiam ducimus distinctio impedit
                        dolor rem adipisci fugit? Reiciendis aliquam nihil labore, consequuntur
                        doloribus neque recusandae harum iste consectetur cumque ducimus blanditiis
                        voluptatibus facilis. Temporibus sint velit sunt praesentium illum quibusdam
                        eaque deleniti numquam excepturi perferendis, illo, blanditiis ratione corporis
                        fugiat? Ab fugiat, mollitia aspernatur sint praesentium omnis laborum. Quis
                        voluptates modi, dolores ea tempore libero deleniti incidunt nesciunt nostrum,
                        repellendus tenetur doloremque, iste obcaecati fugiat sunt enim doloribus
                        debitis! Ipsum nisi veniam, iusto nemo commodi assumenda.
                    </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={'section2'}>
                    <div className="full-screen">
                        Hello World Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                        dolorum modi. Doloribus eveniet aspernatur consequatur rerum quas architecto
                        temporibus perferendis nostrum? Esse saepe aperiam ducimus distinctio impedit
                        dolor rem adipisci fugit? Reiciendis aliquam nihil labore, consequuntur
                        doloribus neque recusandae harum iste consectetur cumque ducimus blanditiis
                        voluptatibus facilis. Temporibus sint velit sunt praesentium illum quibusdam
                        eaque deleniti numquam excepturi perferendis, illo, blanditiis ratione corporis
                        fugiat? Ab fugiat, mollitia aspernatur sint praesentium omnis laborum. Quis
                        voluptates modi, dolores ea tempore libero deleniti incidunt nesciunt nostrum,
                        repellendus tenetur doloremque, iste obcaecati fugiat sunt enim doloribus
                        debitis! Ipsum nisi veniam, iusto nemo commodi assumenda.
                    </div>
                </ScrollableAnchor>
            </div>
        )
    }
}