import type { Template } from "./types"

export const templates: Template[] = [
  {
    header: 'Colors',
    items: [
      {
        label: 'Primary',
        color: 'primary'
      },
      {
        label: 'Secondary',
        color: 'secondary'
      },
      {
        label: 'Success',
        color: 'success'
      },
      {
        label: 'Info',
        color: 'info'
      },
      {
        label: 'Warning',
        color: 'warning'
      },
      {
        label: 'Danger',
        color: 'danger'
      }
    ]
  },
  {
    header: 'Rounded',
    items: [
      {
        label: 'Primary',
        color: 'primary',
        isRounded: true
      },
      {
        label: 'Secondary',
        color: 'secondary',
        isRounded: true
      },
      {
        label: 'Success',
        color: 'success',
        isRounded: true
      },
      {
        label: 'Info',
        color: 'info',
        isRounded: true
      },
      {
        label: 'Warning',
        color: 'warning',
        isRounded: true
      },
      {
        label: 'Danger',
        color: 'danger',
        isRounded: true
      }
    ]
  },
  {
    header: 'Disabled',
    items: [
      {
        label: 'Submit',
        isDisabled: true
      }
    ]
  },
  {
    header: 'Outlined',
    items: [
      {
        label: 'Primary',
        color: 'primary',
        isOutlined: true,
      },
      {
        label: 'Secondary',
        color: 'secondary',
        isOutlined: true,
      },
      {
        label: 'Success',
        color: 'success',
        isOutlined: true,
      },
      {
        label: 'Info',
        color: 'info',
        isOutlined: true,
      },
      {
        label: 'Warning',
        color: 'warning',
        isOutlined: true,
      },
      {
        label: 'Danger',
        color: 'danger',
        isOutlined: true,
      }
    ]
  },
  {
    header: 'Icon',
    items: [
      {
        color: 'primary',
        icon: 'heart',
        isOutlined: true,
      },
      {
        color: 'secondary',
        icon: 'hand'
      },
      {
        color: 'success',
        icon: 'address-book',
        isOutlined: true,
      },
      {
        color: 'info',
        icon: 'credit-card'
      },
      {
        color: 'warning',
        icon: 'lemon',
        isOutlined: true,
      },
      {
        color: 'danger',
        icon: 'hourglass'
      }
    ]
  },
  {
    header: 'Size',
    items: [
      {
        label: 'Normal',
      },
      {
        label: 'Large',
        size: 'large'
      },
    ]
  },
  {
    header: 'Event',
    items: [
      {
        label: 'Click',
        click: () => {
          alert('Welcome VS-components');
        }
      },
    ]
  }
]