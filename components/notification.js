export default class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  }

  close = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div
        className={`${
          this.state.visible ? 'fixed' : 'hidden'
        } inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:justify-end z-40`}
      >
        {/* <!--
    Notification panel, show/hide based on alert state.

    Entering: "transform ease-out duration-300 transition"
      From: "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      To: "translate-y-0 opacity-100 sm:translate-x-0"
    Leaving: "transition ease-in duration-100"
      From: "opacity-100"
      To: "opacity-0"
  --> */}
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg pointer-events-auto">
          <div className="flex rounded-lg shadow-xs">
            <div className="flex items-center flex-1 w-0 p-4">
              <div className="w-full">
                <p className="text-sm font-medium leading-5 text-gray-900">
                  {this.props.title}
                </p>
                <p className="mt-1 text-sm leading-5 text-gray-500">
                  {this.props.content}
                </p>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <div className="flex flex-col -ml-px">
                <div className="flex flex-1 h-0 border-b border-gray-200">
                  <a
                    href="https://google.com"
                    onClick={this.close}
                    className="flex items-center justify-center w-full px-4 py-3 -mb-px text-sm font-medium leading-5 text-yellow-600 transition duration-150 ease-in-out border border-transparent rounded-tr-lg hover:text-yellow-500 focus:outline-none focus:shadow-outline-blue focus:border-yellow-300 active:text-yellow-700 active:bg-gray-50"
                  >
                    {this.props.primary}
                  </a>
                </div>
                <div className="flex flex-1 h-0 -mt-px">
                  <a
                    href="#playground"
                    className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50"
                  >
                    {this.props.secondary}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
