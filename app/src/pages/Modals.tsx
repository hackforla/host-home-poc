import * as React from "react"
import { ModalsStyle } from "./style"

const Modal = (props: any) => {
  const visible = props.visible

  return (
    Object.values(visible).some(value => value) ? (
      <ModalsStyle.Modal>
        {Object.keys(visible).map((modal, i) => {
          return visible[Object.keys(visible)[i]] ?
            (
              <React.Fragment>
                <ModalsStyle.TextHolder>
                  <ModalsStyle.ModalsText>
                    {i === 0 ? "Admin Page" :
                      i === 1 ? "Guest Matches" :
                        i === 2 ? "Interest Buttons" :
                          i === 3 ? "Annotation of Interested" :
                            "Annotation of Decline"
                    }
                  </ModalsStyle.ModalsText>
                  <ModalsStyle.X onClick={() =>
                    props.showElement({
                      adminPage: false,
                      guestMatches: false,
                      interestButtons: false,
                      annotationOfInterested: false,
                      annotationOfDecline: false
                    })}>
                    X
                </ModalsStyle.X>
                </ModalsStyle.TextHolder>
                <ModalsStyle.ImageBorder
                  title={`${modal}`}
                  src={`/hosthome/img/${modal}.png`}
                  alt={`${modal}`}
                />
              </React.Fragment>
            ) : null
        }
        )}
      </ModalsStyle.Modal>
    ) : null
  )
}

export default Modal
