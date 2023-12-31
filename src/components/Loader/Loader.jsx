import { MagnifyingGlass } from 'react-loader-spinner';



export function Loader() {
    return (
      <div className="wrap">
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{
            marginLeft: "auto",
            marginRight: "auto",
          }}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#3f51b5"
        />
      </div>
    );
}


