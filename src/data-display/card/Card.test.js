import React from "react";
import { shallow } from "enzyme";

import Card from "./Card.js";
// import Meta from "./Meta.js";
import Button from "../../general/button/Button.js";

describe("Props - Snapshot", () => {
  it("could create a card with cover", () => {
    const props = {
      style: { width: 240 },
      cover: (
        <img
          alt="image example"
          src="htps://images.pexels.com/photos/1252983/pexels-photo-1252983.jpeg?cs=srgb&dl=pexels-lisa-1252983.jpg&fm=jpg"
        />
      ),
      title: "Card Test with Cover",
      size: "small",
      hoverable: true
    };

    const wrapper = shallow(
      <Card {...props}>
        <p>child component text</p>
      </Card>
    );

    const cover = wrapper.childAt(1);
    const children = wrapper.childAt(2);

    // Testing using Snapshot
    // expect(wrapper).toMatchSnapshot();
    // Testing card component
    expect(wrapper.prop("size")).toEqual(props.size);
    expect(wrapper.prop("hoverable")).toEqual(props.hoverable);
    expect(wrapper.prop("style")).toEqual(props.style);
    // Testing cover
    expect(cover.prop("src")).toEqual(props.cover.props.src);
    expect(cover.prop("alt")).toEqual(props.cover.props.alt);
    expect(children.text()).toBe("child component text");
  });

  // it("could create a card with Meta", () => {
  //   const props = {
  //     style: { width: 300 },
  //     cover: (
  //       <img
  //         alt="image example"
  //         src="htps://images.pexels.com/photos/1252983/pexels-photo-1252983.jpeg?cs=srgb&dl=pexels-lisa-1252983.jpg&fm=jpg"
  //       />
  //     ),
  //     title: "Card Test with Meta",
  //     size: "small",
  //     actions: [
  //       <Button type="main" loading loadingColor={"#333"}>
  //         Waiting
  //       </Button>
  //     ]
  //   };
  //   const metaProps = {
  //     avatar: (
  //       <img
  //         alt="image example"
  //         src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  //       />
  //     ),
  //     title: "Test meta-title",
  //     description: "Test meta-description"
  //   };

  //   const wrapper = shallow(
  //     <Card {...props}>
  //       <Meta {...metaProps} />
  //     </Card>
  //   );

  //   const cover = wrapper.childAt(1);
  //   const meta = wrapper.childAt(2).children();

  //   // Testing using Snapshot
  //   expect(wrapper).toMatchSnapshot();
  //   // Testing card component props
  //   expect(wrapper.prop("size")).toEqual(props.size);
  //   expect(wrapper.prop("style")).toEqual(props.style);
  //   // Testing cover props
  //   expect(cover.prop("src")).toEqual(props.cover.props.src);
  //   expect(cover.prop("alt")).toEqual(props.cover.props.alt);
  //   // Testing Meta props
  //   expect(meta.prop("avatar").props.alt).toEqual(metaProps.avatar.props.alt);
  //   expect(meta.prop("avatar").props.src).toEqual(metaProps.avatar.props.src);
  //   expect(meta.prop("title")).toEqual(metaProps.title);
  //   expect(meta.prop("description")).toEqual(metaProps.description);
  // });
});
