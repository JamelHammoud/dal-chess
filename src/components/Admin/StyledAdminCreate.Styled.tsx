import styled from 'styled-components'

const StyledAdminCreate = styled.div`
  .input-container input, .input-container select {
    height: 38px;
    border: 1px solid #D1D5DB;
    border-radius: 3px;
    width: 100%;
    padding: 0 10px;
    color: #1f2937;
    background: white;
    box-sizing: border-box;
  }

  .input-container textarea {
    min-height: 100px;
    resize: vertical;
    border: 1px solid #D1D5DB;
    border-radius: 3px;
    width: 100%;
    padding: 10px;
    color: #1f2937;
    background: white;
    box-sizing: border-box;
  }

  .input-label {
    font-size: 15px;
    color: #6B7280;
    display: block;
    margin-bottom: 5px;
  }

  .input-container {
    margin-bottom: 2rem;
  }

  .submit-btn {
    height: 40px;
    border-radius: 3px;
    font-weight: 600;
    color: #1f2937;
    padding-top: 3px;
    background: #fabf24;
    letter-spacing: -0.01rem;
    width: 100%;

    &:disabled {
      cursor: not-allowed;
      background: #f3f4f6;
      color: #6a7280;
    }
  }

  .input-image {
    text-align: center;
    padding: 1rem;
    border: 1px dashed #D1D5DB;
    border-radius: 3px;
    width: 100%;
    color: #1f2937;
    background: white;
    box-sizing: border-box;
    position: relative;
    height: 150px;
    background: #f3f4f6;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    color: #6a7280;

    .remove-img-btn {
      position: absolute;
      width: 36px;
      height: 36px;
      z-index: 11;
      right: -18px;
      top: -18px;
      border-radius: 50%;
      background: #1f2937;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: inset 0 -1px 2px 0px #ffffff47, 0 2px 4px 0px #00000069, 0 0 0 5px white;
    }
    
    .remove-img-btn svg {
      height: 20px;
    }

    .image-preview {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100px;
      height: 100px;
      
      img {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
    }

    input {
      font-size: 0;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
      border: 0;
      background: transparent;
      cursor: pointer;
      padding: 0;
      opacity: 0;
    }
  }
`

export default StyledAdminCreate
