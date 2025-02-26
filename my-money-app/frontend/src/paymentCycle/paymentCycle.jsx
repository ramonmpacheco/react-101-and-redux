import React from "react";
import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import Tabs from "../common/tab/tabs";
import TabsHeader from "../common/tab/tabsHeader";
import TabsContent from "../common/tab/tabsContent";
import TabHeader from "../common/tab/tabHeader";
import TabContent from "../common/tab/tabContent";
import {bindActionCreators} from "redux";
import {selectTab, showTabs} from "../common/tab/tabActions";
import {connect} from "react-redux";
import PaymentCycleList from "./paymentCycleList";
import PaymentCycleForm from "./paymentCycleForm";
import {create, update} from "./paymentCycleActions";

class PaymentCycle extends React.Component {
  componentDidMount() {
    this.props.selectTab('tabList')
    this.props.showTabs('tabList', 'tabCreate');
  }

  render() {
    return (
      <div>
        <ContentHeader title='Ciclos de Pagamento' small='Cadastro'/>
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label='Listar' icon='bars' target='tabList'/>
              <TabHeader label='Incluir' icon='plus' target='tabCreate'/>
              <TabHeader label='Alterar' icon='pencil' target='tabUpdate'/>
              <TabHeader label='Excluir' icon='trash-o' target='tabDelete'/>
            </TabsHeader>
            <TabsContent>
              <TabContent id='tabList'>
                <PaymentCycleList/>
              </TabContent>
              <TabContent id='tabCreate'>
                <PaymentCycleForm onSubmit={this.props.create}/>
              </TabContent>
              <TabContent id='tabUpdate'>
                <PaymentCycleForm onSubmit={this.props.update}/>
              </TabContent>
              <TabContent id='tabDelete'><h1>Delete</h1></TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs, create, update}, dispatch);
export default connect(null, mapDispatchToProps)(PaymentCycle);