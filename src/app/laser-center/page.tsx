import Breadcrumbs from '@/components/utility/breadcumbs/BreadCrumbs';

export default function Page() {
  return (
    <div className="flex-1">
      <Breadcrumbs />
      <iframe
        name="iframe1"
        id="iframe1"
        src="https://www.accesslasercenter.com/"
        style={{ borderStyle: 'none', width: '100%', height: '100vh' }}
      ></iframe>
    </div>
  );
}
