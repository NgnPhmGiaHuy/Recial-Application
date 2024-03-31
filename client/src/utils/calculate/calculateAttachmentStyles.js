const calculateAttachmentStyles = (attachmentsLength, index) => {
    let insetStyles = {};
    let width = "none";
    let height = "none";

    switch (attachmentsLength) {
        case 2:
            if (index === 0) {
                width = "50%";
                height = "100%";
                insetStyles = { top: "0", left: "0" };
            } else if (index === 1) {
                width = "50%";
                height = "100%";
                insetStyles = { top: "0", right: "0" };
            }
            break;
        case 3:
            switch (index) {
                case 0:
                    width = "50%";
                    height = "100%";
                    insetStyles = { top: "0", left: "0" };
                    break;
                case 1:
                    width = '50%';
                    height = '50%';
                    insetStyles = { top: '0', right: '0' };
                    break;
                case 2:
                    width = '50%';
                    height = '50%';
                    insetStyles = { bottom: '0', right: '0' };
                    break;
            }
            break;
        case 4:
            switch (index) {
                case 0:
                    width = '50%';
                    height = '50%';
                    insetStyles = { top: '0', left: '0' };
                    break;
                case 1:
                    width = '50%';
                    height = '50%';
                    insetStyles = { top: '0', right: '0' };
                    break;
                case 2:
                    width = '50%';
                    height = '50%';
                    insetStyles = { bottom: '0', left: '0' };
                    break;
                case 3:
                    width = '50%';
                    height = '50%';
                    insetStyles = { bottom: '0', right: '0' };
                    break;
            }
            break;
        case 5:
            switch (index) {
                case 0:
                    width = '50%';
                    height = '50%';
                    insetStyles = { top: '0', left: '0' };
                    break;
                case 1:
                    width = '50%';
                    height = '50%';
                    insetStyles = { bottom: '0', left: '0' };
                    break;
                case 2:
                    width = '50%';
                    height = 'calc(100%/3)';
                    insetStyles = { top: '0', right: '0' };
                    break;
                case 3:
                    width = '50%';
                    height = 'calc(100%/3)';
                    insetStyles = { top: 'calc(100%/3)', right: '0' };
                    break;
                case 4:
                    width = '50%';
                    height = 'calc(100%/3)';
                    insetStyles = { bottom: '0', right: '0' };
                    break;
            }
            break;
        default:
            switch (index) {
                case 0:
                    width = '50%';
                    height = '50%';
                    insetStyles = { top: '0', left: '0' };
                    break;
                case 1:
                    width = '50%';
                    height = '50%';
                    insetStyles = { bottom: '0', left: '0' };
                    break;
                case 2:
                    width = '50%';
                    height = 'calc(100%/3)';
                    insetStyles = { top: '0', right: '0' };
                    break;
                case 3:
                    width = '50%';
                    height = 'calc(100%/3)';
                    insetStyles = { top: 'calc(100%/3)', right: '0' };
                    break;
                case 4:
                    width = '50%';
                    height = 'calc(100%/3)';
                    insetStyles = { bottom: '0', right: '0' };
                    break;
                default:
                    width = "none";
                    height = "none"
                    insetStyles = { bottom: '0', right: '0' };
                    break;
            }
            break;
    }

    return { insetStyles, width, height };
};

export default calculateAttachmentStyles;