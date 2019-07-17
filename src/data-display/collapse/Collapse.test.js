import React from "react";
import { shallow } from "enzyme";
import Collapse from "./Collapse";

const { Panel } = Collapse;

describe("Collapse", () => {
  describe("Snapshot", () => {
    it("should render a collapse", () => {
      const wrapper = shallow(
        <Collapse defaultActiveKey="2">
          <Panel header="Titulo 1" key="1">
            <p>Conteúdo do painel 1.</p>
          </Panel>
          <Panel header="Esse titulo é ativo por padrão" key="2">
            <p>Conteúdo exibido como expandido por padrão</p>
          </Panel>
        </Collapse>
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
