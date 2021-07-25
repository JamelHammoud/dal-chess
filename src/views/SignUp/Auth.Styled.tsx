import styled from 'styled-components'

const StyledAuth = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

  .auth {
    padding: 1rem;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    min-height: 100vh;
    box-sizing: border-box;
    display: grid;
    align-content: center;

    .logo {
      width: 215px;
    }

    .grid {
      display: grid;
      grid-gap: 2rem;
      align-self: start;
      margin: 3rem 0;
  
      .grid-double-row {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-gap: 1rem;
      }

      .user-ranking-container {
        label {
          display: block;
          font-size: 15px;
          color: #6B7280;
          margin-bottom: 5px;
        }
    
        .user-ranking {
          display: grid;
          grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
          grid-gap: 1rem;
          
          .user-ranking-select {
            border: 1px solid #D1D5DB;
            padding: 12px;
            border-radius: 5px;
            position: relative;
            text-align: center;
            height: 50px;
            display: grid;
            align-content: center;
            transition: 0.2s;
    
            &:hover {
              background: #F9FAFB;
            }
      
            .user-ranking-title {
              display: block;
              font-size: 16px;
              font-weight: 500;
              color: #374151;
            }
      
            .user-ranking-value {
              display: flex;
              align-items: center;
              justify-content: center;
              margin-top: 4px;
              font-size: 14px;
              color: #4B5563;
      
              i {
                font-style: normal;
                font-size: 11px;
                font-weight: 500;
                letter-spacing: 0.04rem;
                padding: 2px 5px;
                border-radius: 4px;
                background: #F3F4F6;
                color: #6B7280;
                margin: 0 6px;
              }
            }
      
            input {
              position: absolute;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
              width: 100%;
              height: 100%;
              cursor: pointer;
              border-radius: 4px;
              transition: 0.2s;
    
              &:hover {
                box-shadow: 0 0 0 1px #9CA3AF;
              }
      
              &:checked {
                box-shadow: 0 0 0 1px #6a7280;
              }
            }
          }
        }
      }
    }

    button {
      height: 40px;
      border-radius: 3px;
      font-weight: 600;
      color: #1f2937;
      padding-top: 3px;
      background: #fabf24;
      letter-spacing: -0.01rem;
      width: 100%;
      transition: 0.2s;
  
      &:hover {
        background: #F59E0B;
      }
  
      &:disabled {
        cursor: not-allowed;
        background: #f3f4f6;
        color: #6a7280;
      }
    }

    .page-prompt {
      margin-top: 1rem;
      text-align: center;
      font-size: 14px;
      color: #6B7280;

      a {
        color: #1f2937;
        font-weight: 500;
      }
    }
  }

  .splash {
    background-image: url(https://cdn.dribbble.com/users/1376306/screenshots/15846824/media/3ae684b60b62faaebebf4ac8023a9fb9.jpg);
    background-size: cover;
    background-position: center;
  }
`

export default StyledAuth
