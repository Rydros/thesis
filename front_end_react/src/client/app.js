import React, { Component } from 'react'
import { createGraph } from './graphs'
import { Grid, Row, Col, PageHeader, Panel, FormGroup, Radio, ControlLabel, FormControl, Button } from 'react-bootstrap'

const cvss3 = (
  <h4>CVSS3 Base Scores</h4>
)

const nodeData = (
  <h4>Node Data</h4>
)

export default class App extends Component {
  render () {
    return (
      <Grid>
        <Row>
          <PageHeader>
            Callgraph severity assessments
          </PageHeader>
        </Row>
        <Row className='show-grid'>
          <Col xs={12} md={8}>
            <svg width='700' height='700' />
          </Col>
          <Col xs={6} md={4} >
            <Panel header={nodeData} bsStyle='info'>
              <p id='nodeData' />
            </Panel>
          </Col>
        </Row>
        <Row className='show-grid'>
          <form>
            <Row>
              <Panel header={cvss3} bsStyle='primary'>
                {/* First Row*/}
                <Row className='show-grid'>
                  <Col md={6}>
                    <h4>Attack Vector (AV)</h4>
                    <FormGroup>
                      <Radio name='AV' inline>
                        Network (N)
                      </Radio>
                      {''}
                      <Radio name='AV' inline>
                        Adjacent (A)
                      </Radio>
                      {' '}
                      <Radio name='AV' inline>
                        Local (L)
                      </Radio>
                      <Radio name='AV' inline>
                        Physical (P)
                      </Radio>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <h4>Scope (S)</h4>
                    <FormGroup>
                      <Radio name='S' inline>
                        Low (L)
                      </Radio>
                      {' '}
                      <Radio name='S' inline>
                        High (H)
                      </Radio>
                    </FormGroup>
                  </Col>
                </Row>
                <Row className='show-grid'>
                  <Col md={6}>
                    <h4>Attack Complexity (AC)</h4>
                    <FormGroup>
                      <Radio name='AC' inline>
                        None (N)
                      </Radio>
                      {' '}
                      <Radio name='AC' inline>
                        Low (L)
                      </Radio>
                      {' '}
                      <Radio name='AC' inline>
                        High (H)
                      </Radio>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <h4>Confidentiality (C)</h4>
                    <FormGroup>
                      <Radio name='C' inline>
                        None (N)
                      </Radio>
                      {' '}
                      <Radio name='C' inline>
                        Required (R)
                      </Radio>
                    </FormGroup>
                  </Col>
                </Row>
                <Row className='show-grid'>
                  <Col md={6}>
                    <h4>Privileges Required (PR)</h4>
                    <FormGroup>
                      <Radio name='PR' inline>
                        Unchanged (U)
                      </Radio>
                      {' '}
                      <Radio name='PR' inline>
                        Changed (C)
                      </Radio>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <h4>Integrity (I)</h4>
                    <FormGroup>
                      <Radio name='I' inline>
                        None (N)
                      </Radio>
                      {' '}
                      <Radio name='I' inline>
                        Low (L)
                      </Radio>
                      {' '}
                      <Radio name='I' inline>
                        High (H)
                      </Radio>
                    </FormGroup>
                  </Col>
                </Row>
                <Row className='show-grid'>
                  <Col md={6}>
                    <h4>User Interaction (UI)</h4>
                    <FormGroup>
                      <Radio name='UI' inline>
                        None (N)
                      </Radio>
                      {' '}
                      <Radio name='UI' inline>
                        Low (L)
                      </Radio>
                      {' '}
                      <Radio name='UI' inline>
                        High (H)
                      </Radio>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <h4>Availability (A)</h4>
                    <FormGroup>
                      <Radio name='A' inline>
                        None (N)
                      </Radio>
                      {' '}
                      <Radio name='A' inline>
                        Low (L)
                      </Radio>
                      {' '}
                      <Radio name='A' inline>
                        High (H)
                      </Radio>
                    </FormGroup>
                  </Col>
                </Row>
              </Panel>
              <Panel header='Feedback' bsStyle='warning' id='feedbackPanel'>
                <Row>
                  <Col md={12}>
                    <FormGroup controlId='feedbackText'>
                      <ControlLabel>Since you have made changes to our original calculation, please let us know the
                        reasoning behind your changes.</ControlLabel>
                      <FormControl componentClass='textarea' placeholder='Thanks!' />
                    </FormGroup>
                  </Col>
                </Row>
                <Button type='submit'>
                  Submit
                </Button>
              </Panel>
            </Row>
          </form>
        </Row>
      </Grid>
    )
  }

  componentDidMount () {
    // Loading the graph
    createGraph()
  }
}
