const PrayerFooter = ({ city }: { city: string }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p>مواقيت الصلاة بمدينة {city}</p>
      <p className="text-sm text-muted-foreground">
        حسب توقيت وزارة الاوقاف والشؤون الاسلامية بالمغرب
      </p>
    </div>
  );
};

export default PrayerFooter;
