import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../../public/MarketStats.css';

const MarketStatsTable = () => {
  return (
    <Container>
      <Row className="justify-content-between mb-4">
        {/* First cell */}
        <Col xs={6} className="text-center align-top">
          <div
            className="market-stats"
            data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Total <b>Advancing / Declining</b> issues on NYSE, Nasdaq and AMEX] offsetx=[0] offsety=[20] delay=[100]"
          >
            <div className="market-stats_labels">
              <div className="market-stats_labels_left">
                <p className="very-good">Advancing</p>
                <p className="very-good">61.2% (5826)</p>
              </div>
              <div className="market-stats_labels_right">
                <p className="not-good">Declining</p>
                <p className="not-good">(3308) 34.8%</p>
              </div>
            </div>
            <div className="market-stats_bar">
              <div
                className="market-stats_bar_left-bar"
                style={{ width: '61.2%' }}
              ></div>
              <div
                className="market-stats_bar_center-bar"
                style={{ width: '4.0%' }}
              ></div>
              <div
                className="market-stats_bar_right-bar"
                style={{ width: '34.8%' }}
              ></div>
            </div>
          </div>
        </Col>

        {/* Second cell */}
        <Col xs={6} className="text-center align-top">
          <div
            className="market-stats"
            data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Total <b>New High / New Low</b> issues on NYSE, Nasdaq and AMEX] offsetx=[0] offsety=[20] delay=[100]"
          >
            <div className="market-stats_labels">
              <div className="market-stats_labels_left">
                <p className="very-good">New High</p>
                <p className="very-good">87.0% (569)</p>
              </div>
              <div className="market-stats_labels_right">
                <p className="not-good">New Low</p>
                <p className="not-good">(85) 13.0%</p>
              </div>
            </div>
            <div className="market-stats_bar">
              <div
                className="market-stats_bar_left-bar"
                style={{ width: '87.0%' }}
              ></div>
              <div
                className="market-stats_bar_center-bar"
                style={{ width: '0.0%' }}
              ></div>
              <div
                className="market-stats_bar_right-bar"
                style={{ width: '13.0%' }}
              ></div>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-between">
        {/* Third cell */}
        <Col xs={6} className="text-center align-top">
          <div
            className="market-stats"
            data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Total <b>Above SMA50 / Below SMA50</b> issues on NYSE, Nasdaq and AMEX] offsetx=[0] offsety=[20] delay=[100]"
          >
            <div className="market-stats_labels">
              <div className="market-stats_labels_left">
                <p className="very-good">Above</p>
                <p className="very-good">61.1% (5801)</p>
              </div>
              <div className="market-stats_labels_middle">
                <p className="market-lb-name">SMA200</p>
              </div>
              <div className="market-stats_labels_right">
                <p className="not-good">Below</p>
                <p className="not-good">(3688) 38.9%</p>
              </div>
            </div>
            <div className="market-stats_bar">
              <div
                className="market-stats_bar_left-bar"
                style={{ width: '61.1%' }}
              ></div>
              <div
                className="market-stats_bar_center-bar"
                style={{ width: '0.0%' }}
              ></div>
              <div
                className="market-stats_bar_right-bar"
                style={{ width: '38.9%' }}
              ></div>
            </div>
          </div>
        </Col>

        {/* Fourth cell */}
        <Col xs={6} className="text-center align-top">
          <div
            className="market-stats"
            data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Total <b>Above SMA200 / Below SMA200</b> issues on NYSE, Nasdaq and AMEX] offsetx=[0] offsety=[20] delay=[100]"
          >
            <div className="market-stats_labels">
              <div className="market-stats_labels_left">
                <p className="very-good">Above</p>
                <p className="very-good">68.4% (6491)</p>
              </div>
              <div className="market-stats_labels_middle">
                <p className="market-lb-name">SMA50</p>
              </div>
              <div className="market-stats_labels_right">
                <p className="not-good">Below</p>
                <p className="not-good">(2998) 31.6%</p>
              </div>
            </div>
            <div className="market-stats_bar">
              <div
                className="market-stats_bar_left-bar"
                style={{ width: '68.4%' }}
              ></div>
              <div
                className="market-stats_bar_center-bar"
                style={{ width: '0.0%' }}
              ></div>
              <div
                className="market-stats_bar_right-bar"
                style={{ width: '31.6%' }}
              ></div>
            </div>
          </div>
        </Col>
      </Row>

    </Container>
  );
};

export default MarketStatsTable;
