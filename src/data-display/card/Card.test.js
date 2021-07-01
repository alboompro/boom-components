import React from "react";
import { mount } from "enzyme";
import Card from "./Card";
import {
  CardStyle,
  HeadStyle,
  BodyStyle,
  TitleStyle,
  ExtraStyle,
  ActionStyle
} from "./styles";

describe("Card", () => {
  test("card props", () => {
    const wrapper = mount(
      <Card
        style={{ width: 240 }}
        cover={
          <img
            alt="image example"
            src="https://images.pexels.com/photos/1252983/pexels-photo-1252983.jpeg?cs=srgb&dl=pexels-lisa-1252983.jpg&fm=jpg"
          />
        }
        title="Card test with Cover"
        size="small"
        hoverable
      >
        <p>children</p>
      </Card>
    );

    const CardStyle = wrapper.find(CardStyle).props();
    const HeadStyle = wrapper.find(HeadStyle).props();
    const BodyStyle = wrapper.find(BodyStyle).props();
    const TitleStyle = wrapper.find(TitleStyle).props();
    const ExtraStyle = wrapper.find(ExtraStyle).props();
    const ActionStyle = wrapper.find(ActionStyle).props();

    expect(HeadStyle.props().size).toEqual("small");
    expect(TitleStyle.props().title).toEqual("Card test with Cover");
    expect(CardStyle.props().hoverable).toEqual(true);
    expect(CardStyle.props().cover).toEqual(
      <img
        alt="image example"
        src="https://images.pexels.com/photos/1252983/pexels-photo-1252983.jpeg?cs=srgb&dl=pexels-lisa-1252983.jpg&fm=jpg"
      />
    );
    expect(CardStyle.props().style).toEqual({ width: 240 });
    expect(BodyStyle.props().children).toEqual(<p>children</p>);
  });
});
