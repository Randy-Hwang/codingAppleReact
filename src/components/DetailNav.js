import { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";

function DetailNav() {
  const [tab, setTab] = useState(0);

  return (
    <>
      <Nav fill variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={() => setTab(0)}>
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={() => setTab(1)}>
            Loooonger NavLink
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={() => setTab(2)}>
            Link
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </>
  );
}

const TabContent = ({ tab }) => {
  const [fade, setFade] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade("end");
    }, 100);

    return () => {
      clearTimeout(timer);
      setFade("");
    };
  }, [tab]);

  const content0 = <div>content 0</div>;
  const content1 = <div>content 1</div>;
  const content2 = <div>content 2</div>;

  return (
    <div className={`start ${fade}`}>{[content0, content1, content2][tab]}</div>
  );
};

export default DetailNav;
